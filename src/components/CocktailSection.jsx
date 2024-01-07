"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import { Keyboard, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CocktailBg from './../assets/img/cocktailBg.jpg'
import { FaArrowRightLong } from "react-icons/fa6";
import './styles/Cocktail.scss'
import useFetch from './customHooks/useFetch';
import Link from 'next/link';

const CocktailSection = () => {
  const swiperRef = useRef();
  const data = useFetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`).drinks
  
  return (
    <section className="cocktail" style={{backgroundImage: `url(${CocktailBg.src})`}}>
    <div className="cocktail__container container">
    <h2 className="cocktail__heading">Cocktails <span className="cocktail__heading__partSecond">Menu</span></h2>
    <div className="cocktail__swiper__box">
    <Swiper
    onSwiper={(swiper) => {
      swiperRef.current = swiper;
    }}
    slidesPerView={1.5}
    spaceBetween={300}
    loop={ true}
    slidesPerGroupSkip={6}
    keyboard={true}
    modules={[Keyboard, Navigation]}
    className="mySwiper cocktail__swiper"
    >
    {data?data.map((el,i)=>(
      <SwiperSlide key={i} style={{backgroundImage: `url(${el.strDrinkThumb})`}}>
      <Link href={`/cocktail/${el.idDrink}`} className="cocktail__link link">
      <p className="cocktail__type">{el.strCategory}</p>
      <div className="cocktail__info__box">
      <h3 className="cocktail__name">{el.strDrink
}</h3>
      <p className="cocktail__overview">{el.strInstructions
}</p>
      </div>
      </Link>
      </SwiperSlide>
    )):''}
    
    
    
    <button className='cocktail__custom__btn cursor ' onClick={() => swiperRef.current.slideNext()}>
    <FaArrowRightLong className='cocktail__arrow' />
    </button>
    
    </Swiper>
    </div>
    </div>
    </section>
    )
  }
  
  export default CocktailSection
  