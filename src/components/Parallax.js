import React, { useEffect, useState } from 'react';
import item1 from '../images/item1.webp';
import item2 from '../images/item2.png';
const Parallax = () => {
  const [position, setPosition] = useState(0);

  const onScroll = () => {
    setPosition(window.scrollY);
    console.log(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return (
    <div className="wrapper">
      <div className="bg bg1" style={{ backgroundPositionY: position / 2 }}>
        <div>Parallax</div>
      </div>
      <div className="bg bg2" style={{ backgroundPositionY: position / -3 }}>
        <div>Parallax scroll</div>
      </div>
      <p
        className="desc"
        style={{
          transform: `translateX(${-position / 3}px)`,
          opacity: (position - 1300) / 50,
        }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <p
        className="desc1"
        style={{ transform: `translateX(${position / 3}px)` }}
      >
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged.
      </p>
      <p
        className="desc2"
        style={{
          opacity: (position - 1780) / 100,
        }}
      >
        React Parallax
      </p>
      <p
        className="desc2"
        style={{
          opacity: (position - 1910) / 100,
        }}
      >
        Practice Scrolling
      </p>
      <p
        className="desc2"
        style={{
          opacity: (position - 2040) / 100,
        }}
      >
        it's just Test
      </p>
      <p
        className="desc2"
        style={{
          opacity: (position - 2170) / 100,
        }}
      >
        See you again
      </p>
      <img
        src={item1}
        className="item"
        alt=""
        style={{ transform: `translateY(${-position / 8}px)` }}
      />
      <img
        src={item2}
        className="item item_snow"
        alt=""
        style={{ transform: `translateY(${position / 2}px)` }}
      />
    </div>
  );
};

export default Parallax;
