import React, { useState } from 'react';

const ReadMore = ({ text, maxLength }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <>
      {isTruncated ? (
        <span>{text.slice(0, maxLength)}...</span>
      ) : (
        <span>{text}</span>
      )}
      <a className='readbtn' onClick={toggleTruncate}>
        {isTruncated ? 'Read More' : 'Read Less'}
      </a>
    </>
  );
};

export default ReadMore;
