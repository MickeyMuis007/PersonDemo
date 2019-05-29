import React from 'react';
import './PopularTag.css';

const popularTag = (props) => {
  const popularTag = props.popularTag;
  const total = popularTag._id ? popularTag._id.total : 0;
  const tags = popularTag.tags ? popularTag.tags : [];

  const displayTags = (
    <div className="container">
      {tags.map((tag) => {
        return <div key={tag}>{tag}</div>
      })}
    </div>
  )

  return (
    <div className="container text-uppercase text-center popular-tag-container">
      <div className="text-primary font-weight-bold">
         {popularTag.gender}
      </div>
      <div>{displayTags}</div>
      <div>Total: {total}</div>
    </div>
  )
}

export default popularTag;