import React from 'react'
import {getPosts, getPostDetails} from '../../services'
import {PostDetail, Categories, PostWidget, Author, Comments, CommentsForm} from '../../components'

const PostDetails = () => {
    return (
        <div className="container bg-white">
            <h1>Post Details</h1>
            <div className="row">
                <div className="col-9">
                    <PostDetail/>
                    <Author />
                    <CommentsForm />
                    <Comments />
                </div>
                <div className="col-3">
                    <PostWidget/>
                    <Categories />
                </div>
            </div>
        </div>
    )
}
export default PostDetails;