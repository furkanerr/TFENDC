import React from 'react'
import "../../styles/index.scss";
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
    }
]
const [deger,setDeger] = React.useState(0)
    const handleNext =()=>{
        setDeger(deger+100)
        console.log(deger)

    }
    const handlePrev =()=>{
      setDeger(deger-100)

  }
  return (
<div className='Carousel'>
    <div>
      Top News
    </div>
    <div className='Carousel-container'>
    <div className='handle left-handle' onClick={handlePrev}></div>
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
                  <span className='dot'>.</span>
                  <span className='owner'>{item.owner}</span>
                </div>
          </div>
          
        )
      })
    }
    </div>
    <div className=' handle right-handle' onClick={handleNext}></div>
    </div>
</div>


  )
}

export default News