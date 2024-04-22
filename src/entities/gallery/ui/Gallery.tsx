'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import cls from './gallery.module.css';

const galleryData = [
  'https://www.maam.ru/upload/blogs/detsad-590027-1713676208.jpg',
  'https://www.maam.ru/upload/blogs/detsad-1007909-1713689804.jpg',
  'https://www.maam.ru/upload/blogs/detsad-1833436-1713698404.jpg',
];

const renderWithoutImage = () => {
  return <div>Нет картинок</div>;
};

function Gallery() {
  const [index, setIndex] = useState(0);
  const [isClicked, setIsClicked] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout>();
  const timeOutRef = useRef<NodeJS.Timeout>();

  const onHandleClick = () => {
    setIsClicked(false);
    timeOutRef.current = setTimeout(() => {
      setIsClicked(true);
    }, 5000);
  };

  const handleNavButtonClick = (i: number) => {
    setIndex(i);
    onHandleClick();
  };

  const LeftBtn = () => {
    setIndex(index > 0 ? index - 1 : galleryData.length - 1);
    onHandleClick();
  };

  const RightBtn = () => {
    setIndex(index < galleryData.length - 1 ? index + 1 : 0);
    onHandleClick();
  };

  useEffect(() => {
    if (isClicked) {
      intervalRef.current = setInterval(() => {
        setIndex((prevIndex) => (prevIndex === galleryData.length - 1 ? 0 : prevIndex + 1));
      }, 2000);
    }

    return () => {
      clearInterval(intervalRef.current);

      if (!isClicked) {
        clearTimeout(timeOutRef.current);
      }
    };
  }, [isClicked]);

  return (
    <div className={cls.gallery}>
      {galleryData.length ? (
        <>
          <div className={cls.galleryImg}>
            <button
              type="button"
              id="gallery__btn-left"
              className={cls.galleryBtnLeft}
              onClick={LeftBtn}
            >
              &#60;
            </button>
            <Image width={300} height={300} src={galleryData[index]} alt="" />
            <button
              type="button"
              id="gallery__btn-right"
              className={cls.galleryBtnRight}
              onClick={RightBtn}
            >
              &#62;
            </button>
          </div>
          <div className={cls.galleryNav}>
            {galleryData.map((_, i) => (
              <button
                type="button"
                key={i}
                className={`${cls.galleryNavBtn} ${i === index ? cls.active : ''}`}
                onClick={() => handleNavButtonClick(i)}
              />
            ))}
          </div>
        </>
      ) : (
        renderWithoutImage()
      )}
    </div>
  );
}

export default Gallery;
