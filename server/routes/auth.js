const express = require('express');
const router = express.Router()
const User = require('../models/User');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const verifyToken = require('../middleware/auth');


//@route GET api/auth
//@desc Check is user is logged in
//@access Public
router.get('/',verifyToken, async(req,res) => {
    try {
        const user = await User.findById(req.userId).select('-password')
        if(!user) return res.status(400).json({success: false, message:'User not found'})
        res.json({success: true, user})
    } catch (error) {
        res.status(400).json({error: err}); 
    }
})


//@route POST api/auth/register
//@desc Register user
//@access Public
router.post('/register', async(req,res) =>{
    const {username, password, email, NumberPhone} = req.body
        
        // simple validation
        if(!username || !password || !email || !NumberPhone)
        return res
        .status(400)
        .json({success: false, message: 'Missing email and/or password'})
       
        try{
            // check for existing user
            const user = await User.findOne({username})           
            if(user)
            return res.status(400).json({success: false, message: 'Username already taken'})

            const gmail = await User.findOne({email})           
            if(gmail)
            return res.status(400).json({success: false, message: 'gmail already taken'})

            
           // const phone = await User.findOne({NumberPhone})
            // if(phone)
            // return res.status(400).json({success: false, message: 'phone number ten'})

            const hashedPassword = await argon2.hash(password)
            const newUser = new User({
                username,
                password: hashedPassword,
                email,
                NumberPhone             
            })
            await newUser.save()

            const accessToken = jwt.sign({userId: newUser._id}, process.env.ACCESS_TOKEN_SECRET)
            res.json({success: true, message: 'User created successfully',accessToken})
        } catch(error){
        res.status(400).json({error: err});
    }
})


//@rote Update api.user
//@desc Update user
//@access Private

router.put('/editUser/:id',async(req,res) =>{
    const {username, password, email, NumberPhone} = req.body

    if(!username)
    return res.status(400).json({success: false, message:'Missing title'})

    if(!password)
    return res.status(400).json({success: false, message:'Missing content'})

    if(!email)
    return res.status(400).json({success: false, message:'Missing author'})

    if(!NumberPhone)
    return res.status(400).json({success: false, message:'Missing url'})
  
try{
    let updatedUser = {username, password, email, NumberPhone}

    const userUpdateCondition = {_id: req.params.id, user: req.userId}

    updatedUser = await User.findOneAndUpdate(userUpdateCondition, updatedUser, {new: true})

    if(!updatedUser)
    return res
        .status(401)
        .json({success: false, message: 'user not author'})

    res.json({
        success: true, 
        message:'Update user success', user: updatedUser})
}catch(error){
    res.status(400).json({error: err});
}


})


//@route POST api/auth/login
//@desc Login user
//@access Public

router.post('/login', async(req,res) =>{
    const{username, password} = req.body

    if(!username || ! password)
    return res
    .status(400)
    .json({success: false, message: 'Missing username and/or password'})
try{
// check for existing user
    const user = await User.findOne({username})
    if(!user)
    return res
    .status(400)
    .json({success: false, message:'Incorrect username of password '})

    const passwordValid = await argon2.verify(user.password, password)
    if(!passwordValid)
    return res
    .status(400)
    .json({success: false, message:'Incorrect password of username'})

    const accessToken = jwt.sign(
        {userId: user._id},
         process.env.ACCESS_TOKEN_SECRET
    )

    res.json({
        success: true, 
        message: 'Login in successfully',
        accessToken}
    )

}catch(error){
    res.status(400).json({error: err});
}

})



module.exports = router