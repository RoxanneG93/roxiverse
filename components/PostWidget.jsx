import React, {useState, useEffect, useLayoutEffect} from 'react'
import moment from 'moment'
import Link from 'next/link';
import { getRecentPosts, getRelatedPosts } from '../services';


const imageStyle = {
  // backgroundColor: '#c7919f',
  height: '50px',
  width: '50px'
}

function PostWidget({categories, slug}) {
  const [relatedPosts, setRelatedPosts] = useState([]);
  
  useEffect(() => {
    if(slug){ // if there is slug in the url path
      // show related posts
      getRelatedPosts(categories, slug).then((result) => setRelatedPosts(result))
    } else {
      getRecentPosts(categories, slug).then((result) => setRelatedPosts(result))
    }

  }, [slug])

  console.log('realated posts', relatedPosts)
  return (
    <div className='card shadow'>
      <h3>{slug? 'related posts' : 'recent posts'} </h3>
      {relatedPosts.map((post) => (
       <div key={post.title}>
            <div>
              <img src={post.featuredImage.url} className="rounded-circle" style={imageStyle} alt="" />
            </div>
            <div>
              <p>{moment(post.createdAt).format('MMM DD,YYYY')} </p>
              <Link href={`/post/${post.slug}`} key={post.title}>
                {post.title}
              </Link>
            </div>
       </div>
      ))}

    </div>
  )
}

export default PostWidget