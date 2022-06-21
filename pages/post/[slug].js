import React from 'react'
import {getPosts, getPostDetails} from '../../services'
import {PostDetail, Categories, PostWidget, Author, Comments, CommentsForm} from '../../components'

const PostDetails = ({ post }) => {
    console.log('HEYYYYY')
    console.log('post', post)
    return (
        <div className="container">
            <h1>Post Details</h1>
            <div className="row">
                <div className="col-9">
                    <PostDetail post={post} />
                    <Author author={post.author} />
                    <CommentsForm slug={post.slug}/>
                    <Comments slug={post.slug} />
                </div>
                <div className="col-3">
                    <PostWidget slug={post.slug} categories={post.categories.map((category)=> category.slug) }/>
                    <Categories />
                </div>
            </div>
        </div>
    )
}
export default PostDetails;

export async function getStaticProps({params}){ 
    const data = (await getPostDetails(params.slug)) || []; 
    return {
      props: {post:data}
    }
}

// so that nextjs can know all the possible paths we can go to
export async function getStaticPaths(){ 
    const posts = await getPosts();
    //console.log('posts', posts)
    // let paths = posts.map(({node: {slug}}) => slug)
    //let paths = posts.map(({node: {slug}}) => ({params: slug}))
    //console.log('paths', paths)
    return {
      paths: posts.map(({node: {slug}}) => ({params: {slug}})),
      fallback: false
    }
}