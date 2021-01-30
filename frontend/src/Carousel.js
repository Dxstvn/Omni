import React, {Component} from 'react';
import './Carousel.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation} from 'swiper'
import 'swiper/swiper-bundle.css';
SwiperCore.use(Navigation);

export default class Carousel extends Component {
  render() {
    const slidesOne = [];
    slidesOne.push(
        <SwiperSlide key={"sony"} tag="li">
          <img
            className="sony-logo"
            src="https://www.figma.com/file/7rgOKqzRQqG34rs7ulcYqe/Project-Y?node-id=182%3A774"
            alt=""
          />
        </SwiperSlide>
      );
    slidesOne.push(
    <SwiperSlide key={"walmart"} tag="li">
        <img
        className="sony-logo"
        src="https://www.figma.com/file/7rgOKqzRQqG34rs7ulcYqe/Project-Y?node-id=182%3A781"
        alt=""
        />
    </SwiperSlide>
    );
    slidesOne.push(
        <SwiperSlide key={"amazon"} tag="li">
          <img
            className="sony-logo"
            src="https://www.figma.com/file/7rgOKqzRQqG34rs7ulcYqe/Project-Y?node-id=182%3A763"
            alt=""
          />
        </SwiperSlide>
      );
    return (
      <React.Fragment>
        <Swiper
          id="main"
          tag="section"
          wrapperTag="ul"
          navigation
          spaceBetween={0}
          slidesPerView={3}
          onInit={(swiper) => console.log('Swiper initialized!', swiper)}
          onSlideChange={(swiper) => {
            console.log('Slide index changed to: ', swiper.activeIndex);
          }}
          onReachEnd={() => console.log('Swiper end reached')}
        >
          {slidesOne}
        </Swiper>
      </React.Fragment>
    );
  }
  }
  
