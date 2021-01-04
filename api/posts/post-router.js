const express = require('express')
const router = express.Router()
const Post = require('./post-modal')
const restrict = require('../auth/restricted-middleware')

router.get('/', restrict, async (req, res) => {
    try{
       const data = await Post.getPost()
       res.status(200).json(data)
    } catch(error){
        res.status(500).json({ message: error.message })
    }
})
router.get('/:id/posts', restrict, async (req, res) => {
    try{
        const {id} = req.params
        const data = await Post.getUserPost(id)
        res.status(200).json(data)
    } catch(error){
        res.status(500).json({ message: error.message })
    }
})
router.post('/', restrict, async (req, res) => {
    try{
        const post = req.body
        const data = await Post.addPost(post)
        res.status(201).json(data)
    } catch(error){
        res.status(500).json({ message: error.message })
    }
})


router.put('/:id', restrict, async (req, res) => {
    try{
        const { id } = req.params
        const changes = req.body
        await Post.updatePost(id, changes)
        const updated = await Post.findById(id)
        res.status(200).json(updated)
    } catch(error){
        res.status(500).json({ message: error.message })
    }
})
router.delete('/:id', restrict, async (req, res) => {
    try{
        const { id } = req.params
        await Post.deletePost(id)
        res.json({message: `Post with id ${id} was deleted`})
    } catch(error){
        res.status(500).json({ message: error.message })
    }
})
router.get('/posts/:id', restrict, (req, res) => {
    const {id} = req.params

    Post.findById(id)
    .then(post => {
        res.status(200).json(post)
    })
    .catch(err => res.status(400).json(err.message))
})
module.exports = router