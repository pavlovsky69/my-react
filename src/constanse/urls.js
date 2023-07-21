const baseURL='https://jsonplaceholder.typicode.com'



const albums='/albums'
const comments='/comments'
const posts='/posts'
const todos='/todos'
const urls={
    albums:{
        base:albums,
        byId:(id)=>`${albums}/${id}`
    },
    comments:{
        base: comments,
        byId: (id)=>`${comments}/${id}`
    },
    posts:{
        base: posts,
        byId:(id)=>`${posts}/${id}`
    },
    todos:{
        base:todos,
        byId:(id)=>`${todos}/${id}`
    }
}

export{
    baseURL,
    urls
}