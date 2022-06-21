import React from 'react';
import moment from 'moment';
import Link from 'next/link';

function PostCard({post}) {
    console.log('HEYYYYYYY')
    // image urls are showing up NULL and I don't know why
//console.log(post.author) // <-- not user yet why this isn't working
// need to tests how this works when we forget to publish the images
  return (
    <div className="card shadow">
        {/* see how we can get it to not use node */}
        <div>
            <img src={post.featuredImage.url} alt={post.title} className=""/>
        </div>
        <div>{post.title}</div>
        <div>{post.excerpt}</div>
        <h1><Link href={`/post/${post.slug}`}>{post.title}</Link></h1>
        <div>
            <div>
                <img src={post.author.photo.url} alt={post.author.name} height="30px" width="30px" />
                <p>{post.author.name}</p>
                {/* also include last edited */}
                <div>{moment(post.createdAt).format('MMM DD, YYYY')}</div>
            </div>
        </div>
        <p>{post.excerpt}</p>
        <div className="btn btn-primary btn-sm">
            <Link href={`/post/${post.slug}`}><span>Continue Reading</span></Link>
        </div>
    </div>
  )
}

export default PostCard