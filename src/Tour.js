import React, { useState } from 'react';

const Tour = ({ id, image, info, name, price, removeTours }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>
          {readMore
            ? info
            : info.substring(0, 200).endsWith(' ')
            ? `${info.substring(0, 199)}...`
            : `${info.substring(0, 200)}...`}
          {console.log(info.substring(0, 200))}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : 'read more'}
          </button>
        </p>
        <button className='delete-btn' onClick={() => removeTours(id)}>
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
