const express = require('express');
const router = express.Router()
const verifyToken = require('../middleware/auth');
const { populate } = require('../models/News');

const News = require('../models/News');


//@rote News api.news
//@desc get news
//@access private
router.get('/',verifyToken, async(req,res) => {
    try {
        const news = await News.find({user: req.userId}).populate('user',['username'])
        res.json({success: true, news})
    } catch (error) {
        res.status(400).json({error: err});
    }
})

//@rote New api.news
//@desc create news
//@access private
router.post('/',verifyToken, async(req, res)=>{
    const{title,content,author,url,attachment,likeCount} = req.body

    //simple validation
    if(!title)
    return res.status(400).json({success: false, message:'Missing title'})

    if(!content)
    return res.status(400).json({success: false, message:'Missing content'})

    if(!author)
    return res.status(400).json({success: false, message:'Missing author'})

    // if(!url)
    // return res.status(400).json({success: false, message:'Missing url'})

    if(!attachment)
    return res.status(400).json({success: false, message:'Missing attachment'})

    try {

        const createNews = new News({
            title,
            content,
            author,
            url: (url.startsWith('https://') ? url : 'https://'+url) || '',
            attachment,
            likeCount: 0,
            user: req.userId
        })

        await createNews.save()
        res.json({success: true, message: "Create news success", new: createNews})
    } catch (error) {
        res.status(400).json({error: err});
    }
})

//@rote News all api.news
//@desc get all news
//@access public
router.get('/all',verifyToken, async(req, res) => {
    try {
        const news = await News.find(req.id).populate('user',['username'])
        res.json({success: true, news})
    } catch (error) {
        res.status(400).json({error: err});
    }
})

//@rote News update apo.news
//@desc update news
//@access private

router.put('/:id', verifyToken, async(req,res) => {
    const{title,content,author,url,attachment,likeCount} = req.body

    //simple validation
    if(!title)
    return res.status(400).json({success: false, message:'Missing title'})

    if(!content)
    return res.status(400).json({success: false, message:'Missing content'})

    if(!author)
    return res.status(400).json({success: false, message:'Missing author'})

    // if(!url)
    // return res.status(400).json({success: false, message:'Missing url'})

    if(!attachment)
    return res.status(400).json({success: false, message:'Missing attachment'})

    try{
       let updateNews = {
        title,
        content,
        author,
        url: (url.startsWith('https://') ? url : 'https://'+url) || '',
        attachment,
        likeCount
       } 
        
       const newsUpdateCondition ={_id: req.params.id, user: req.userId}

       updatedNews = await News.findOneAndUpdate(newsUpdateCondition,updateNews,{new: true})

       if(!updateNews)
        return res.status(400).json({success: false, message: 'News not found or user not author'})

        res.json({success: true, message:'Update news success', news: updateNews})
       
    } catch(error){
        res.status(400).json({error: err});
    }

})

//@rote News delete apo.news
//@desc delete news
//@access private
router.delete('/:id',verifyToken, async(req,res) => {
    try{
        const newsDeleteCondition = {_id: req.params.id, user: req.userId}
        const deleteNews = await News.findOneAndDelete(newsDeleteCondition)
        if(!deleteNews)
        return res.status(401).json({success: false, message: 'Post not found or user not author'})
        
        res.json({success: true, message:'Delete post success', news: deleteNews})
   
    }catch(error){
        res.status(400).json({error: err});
    }
})



module.exports = router