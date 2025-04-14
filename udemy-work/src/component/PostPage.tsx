import React, { useEffect, useState } from 'react'

type Post = {
    id: number;
    title: string;
    category: string;
    price: number;
}

 const PostPage =() => {
  const [post ,setPost] = useState<Post[]>([])

    const getpost = async () => {
        let response = await fetch('https://dummyjson.com/products')
        let result = await response.json()
        setPost(result.products)
        console.log(result.products)
    }

  useEffect(()=>{
   getpost()
  },[])
  return (
    <div>
     <h1>Post</h1>
     <button onClick={getpost}>Click to See Post</button>
     <div>
      {post.map(posts =>{
        return <div className='border p-4' key={posts.id}>
          <h1>{posts.title}</h1>
          <h1>{posts.category}</h1>
          <h1>{posts.price}</h1>
        </div>
      })}
     </div>
    </div>
  )
}

export default PostPage
