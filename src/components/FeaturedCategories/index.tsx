'use client';
import React from 'react';
import styles from './styles.module.css';

function FeaturedCategories() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 5,
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Featured Categories</h1>
      <div className={styles.grid}>
        {/* <Slider {...settings}> */}
        <div>
          {/* {data?.categories?.map((cat, i) => (
              <CategoryCard key={i} category={cat} />
            ))} */}
          <>hey</>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCategories;

// import React, { useState } from 'react';
// import CategoryCard from './CategoryCard';
// import styles from './styles.module.css'; // Import your CSS styles

// const FeaturedCategories = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? data.categories.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === data.categories.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Featured Categories</h1>
//       <div className={styles.carousel}>
//         <button className={styles.prevButton} onClick={handlePrev}>
//           Prev
//         </button>
//         <div className={styles.carouselInner}>
//           {data?.categories?.map((cat, i) => (
//             <div
//               key={i}
//               className={`${styles.carouselItem} ${
//                 i === currentIndex ? styles.active : ''
//               }`}
//             >
//               <CategoryCard category={cat} key={undefined} />
//             </div>
//           ))}
//         </div>
//         <button className={styles.nextButton} onClick={handleNext}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FeaturedCategories;
