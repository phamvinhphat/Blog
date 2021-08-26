const express = require('express');
const router = express.Router()
const verifyToken = require('../middleware/auth');
const { populate } = require('../models/Post');

const Post = require('../models/Post');

//@rote Post api.posts
//@desc create post
//@access Private
router.post('/', verifyToken,async(req,res) =>{
    const {title,content,author,url,likeCount} = req.body

    // simple validation
    if(!title)
    return res.status(400).json({success: false, message:'Missing title'})

    if(!content)
    return res.status(400).json({success: false, message:'Missing content'})

    if(!author)
    return res.status(400).json({success: false, message:'Missing author'})
    
    if(title.le)

    if(!url)
    return res.status(400).json({success: false, message:'Missing url'})

    if(!url.startsWith('https://github.com'))
    return res.status(400).json({success: false, message:'Not Git url'})

try{
    const newPost = new Post({
        title,
        content,
        author,
        url: url.startsWith('https://') ? url : 'https://'+url,
        // BUG: Need to remove because users can't like themselves
        likeCount,
        user: req.userId
    })
    await newPost.save()
    
    res.json({success: true, message: 'Create Post success',post: newPost})
}catch(error){
    res.status(400).json({error: err});
}

})

//@rote GET api.posts
//@desc Get post
//@access Private

router.get('/',verifyToken, async(req,res) => {
    try{
        //fettle is Id user request 
        const posts = await Post.find({user: req.userId}).populate('user',['username'])
        res.json({success: true, posts})
    } catch(error){
        res.status(400).json({error: err});
    }

})

//@rote GET ALL api.posts
//@desc Get All post
//@access public  {user: req.userId}).populate('user',['username']

router.get('/about',verifyToken, async(req,res) => {
    try{
        //fettle is Id user request 
        const posts = await Post.find(req._id).populate('user',['username'])
        res.json({success: true, posts})
    } catch(error){
        res.status(400).json({error: err});
    }

})

//@rote Update api.posts
//@desc Update post
//@access Private

router.put('/:id',verifyToken, async(req,res) =>{
    const {title,content,author,url} = req.body

    if(!title)
    return res.status(400).json({success: false, message:'Missing title'})

    if(!content)
    return res.status(400).json({success: false, message:'Missing content'})

    if(!author)
    return res.status(400).json({success: false, message:'Missing author'})

    if(!url)
    return res.status(400).json({success: false, message:'Missing url'})

    if(!url.startsWith('https://github.com'))
    return res.status(400).json({success: false, message:'Not Git url'})


  

try{
    let updatedPost = {
        title,
        content,
        author,
        url: (url.startsWith('https://') ? url : 'https://'+url) || ''
    }
    const postUpdateCondition = {_id: req.params.id, user: req.userId}

    updatedPost = await Post.findOneAndUpdate(postUpdateCondition, updatedPost, {new: true})

    if(!updatedPost)
    return res
        .status(401)
        .json({success: false, message: 'Post not found or user not author'})

    res.json({
        success: true, 
        message:'Update post success',post: updatedPost})
}catch(error){
    res.status(400).json({error: err});
}


})

//@rote delete api.posts
//@desc delete post
//@access Private
router.delete('/:id', verifyToken, async(req,res) =>{
    try{
        const postDeleteCondition = {_id: req.params.id, user: req.userId}
        const deletedPost = await Post.findOneAndDelete(postDeleteCondition)
        
        if(!deletedPost)
        return res
            .status(401)
            .json({success: false, message: 'Post not found or user not author'})
        
            res.json({
                success: true, 
                message:'Delete post success',post: deletedPost})

    } catch(error){
        res.status(400).json({error: err});
    }
})

module.exports = router
