import React from 'react';
import './ExhibitionPhoto.css';
import '../App.css'
import eleventhPic from "./../assets/11th.PNG";
import twelfthPic from "./../assets/11th.PNG";
import thirteenthPic from "./../assets/11th.PNG";


function ExhibitionPhoto({ activeButton }) {
  console.log("env : ", process.env.REACT_APP_PUBLIC_URL)
  let imageUrl;

  switch (activeButton) {
    case '11기':
      // imageUrl = 'https://drive.google.com/uc?export=view&id=19-KUmaynk6AyEMeuDT3DJHEneYgROFfu';
      imageUrl = eleventhPic;
      break;
    case '12기':
      // imageUrl = 'https://drive.google.com/uc?export=view&id=1ygpIzYWvgAeooUZ8ahC59KImUNd-q5qX';
      imageUrl = twelfthPic;
      break;
    case '13기':
      // imageUrl = 'https://drive.google.com/uc?export=view&id=1LuwKoGH8mh3l62nIZYeNqt_rz38kvV2t';
      imageUrl = thirteenthPic;
      break;
    default:
      return null;
  }

  return (
    <div className='photo-section'>
      <div className='photo-img'>
        <img src={imageUrl} className="photo" alt="photo" />
      </div>
    </div>
  );
}

export default ExhibitionPhoto;
