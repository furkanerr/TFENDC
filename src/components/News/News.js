import React, { useState } from 'react'
import "../../styles/index.scss";
import IconRight from '../../assets/icons/icon-right.svg';
import IconLeft from '../../assets/icons/icon-left.svg';
function News() {
  const newsData =[
    {
        "id": 1,
        "title": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        'img':'https://i.ibb.co/HNWZX8g/Image.png',
        'time':'1h Ago',
        'owner':'John Doe',
    },
    {
        "id": 2,
        "title": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        'img':'https://i.ibb.co/HNWZX8g/Image.png',
        'time':'1h Ago',
        'owner':'John Doe',
    },
    {
        "id": 3,
        "title": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        'img':'https://i.ibb.co/HNWZX8g/Image.png',
        'time':'1h Ago',
        'owner':'John Doe',
    },
    {
        "id": 4,
        "title": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        'img':'https://i.ibb.co/HNWZX8g/Image.png',
        'time':'1h Ago',
        'owner':'John Doe',
    },
    {
        "id": 5,
        "title": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        'img':'https://i.ibb.co/HNWZX8g/Image.png',
        'time':'1h Ago',
        'owner':'John Doe',
    },
    {
        "id": 6,
        "title": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        'img':'https://i.ibb.co/HNWZX8g/Image.png',
        'time':'1h Ago',
        'owner':'John Doe',
    },
    {
      "id": 7,
      "title": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      'img':'https://i.ibb.co/HNWZX8g/Image.png',
      'time':'1h Ago',
      'owner':'John Doe',
  },
  {
      "id": 8,
      "title": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      'img':'https://i.ibb.co/HNWZX8g/Image.png',
      'time':'1h Ago',
      'owner':'John Doe',
  },
  {
      "id": 9,
      "title": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      'img':'https://i.ibb.co/HNWZX8g/Image.png',
      'time':'1h Ago',
      'owner':'John Doe',
  }
]

const [sliderIndex, setSliderIndex] = useState(0);
const [itemPerSlide] = useState(3);
const [deger,setDeger] = useState(0)
    const handleNext =()=>{
       
        if(sliderIndex < Math.ceil(newsData.length / itemPerSlide)){
          setDeger(deger-100)
            setSliderIndex(sliderIndex + 1)
            console.log(sliderIndex)
        }
       

    }
    const handlePrev =()=>{
        if(sliderIndex > 0){
          setDeger(deger+100)
            setSliderIndex(sliderIndex - 1)
            console.log(sliderIndex)
        }
      

  }
  return (
<div className='Carousel'>
    <div className='header'>
      Top News
    </div>
    <div className='wrapper'>
    <div className='handle left-handle' onClick={handlePrev}>
      <img src={IconLeft} alt='arrow-left'/>
    </div>
    <div className='Carousel-container'>
    
    <div className='slider' style={{transform:`translateX(${deger}%)`}}>
    {
      newsData.map((item,index)=>{
        return(
         
            <div className='slider-item'>
            <div className='slider-item-img'>
              <img src={item.img} alt='img' />
            </div>
            <div className='slider-item-text'>
              <h3>{item.title}</h3>
              </div>
                <div className='time-and-owner'>
                  <span className='time'>{item.time}</span>
                  <span className='dot'>·</span>
                  <span className='owner'>{item.owner}</span>
                </div>
          </div>
          
        )
      })
    }
    </div>
   
    </div>
    <div className='handle right-handle' onClick={handleNext}>
    <img src={IconRight} alt='arrow-left'/>
    </div>
    </div>
</div>


  )
}

export default News