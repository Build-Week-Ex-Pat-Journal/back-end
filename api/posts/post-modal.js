const db = require('../../data/connection')


function getPost(){
    return db("posts")
}

function findBy(filter){
    return db('posts').where(filter).first()
}

function findById(id){
    return db('posts').where("id", id).first()
}

async function addPost(post){
const [id] = await db('posts').insert(post, 'id')
return findById(id)
}
function updatePost(id, post){
    return db("posts").where('id', id).update(post)
}
function deletePost(id){
    return db('posts').where('id', id).del()
}

function getUserPost(id){
    return db('posts as p')
    .join('users as u', "u.id", '=', 'p.user_id')
    .select('p.story', 'p.image')
    .where("p.user_id", id)
}

module.exports = {
    getPost,
    findBy,
    findById,
    addPost,
    updatePost,
    deletePost,
    getUserPost
}