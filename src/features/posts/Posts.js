import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from './postSlice';

const Posts = () => {
    const {isLoading,posts,error} = useSelector((state) => state.posts);

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(fetchPosts());
    }, [dispatch]);
    

  return (
    <div>
        {isLoading && <h2>Loading...</h2>}
        {error && <h3>{error}</h3>}
        <section>
            {posts && posts.map((post)=>{
                return(
                    <article key={post.id}>
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>
                    </article>
                )
            })}
        </section>
    </div>
  )
}

export default Posts