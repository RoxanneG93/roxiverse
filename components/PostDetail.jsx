import React from 'react'
import moment from 'moment';
import Link from 'next/link';



const PostDetail = ({post}) => {

  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };
  return (
    <div className='card shadow'>
      <div>
        <img src={post.featuredImage.url} alt={post.title} className="" />
      </div>
      <h1>{post.title}</h1>
      <div>{post.excerpt}</div>
      <div>
        <div>
          <span>author:</span>
            <img src={post.author.photo.url} alt={post.author.name} height="30px" width="30px" />
            <p>{post.author.name}</p>
            {/* also include last edited */}
            <div>{moment(post.createdAt).format('MMM DD, YYYY')}</div>
        </div>
      </div>
      <div>
      {post.content.raw.children.map((typeObj, index) => {
        const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));
        return getContentFragment(index, children, typeObj, typeObj.type);
      })}
      </div>
    </div>
  )
}

export default PostDetail