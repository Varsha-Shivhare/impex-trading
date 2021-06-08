import React from 'react';
import './Swiper.css'
import Swiper, { Navigation, Pagination} from 'swiper';
import 'swiper/swiper-bundle.css';

Swiper.use([Navigation, Pagination]);
class SwiperNew extends React.Component {
    componentDidMount() {
    this.mySwiper = new Swiper('.swiper-container', {
        direction: "horizontal",
        loop: true,      
        pagination: {
          el: '.swiper-pagination',
          clickable:true,
        },
      
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      })
    }
    render() {
        return (
            <>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img src={"https://unsplash.it/1920/1080?random=2"} alt="img13"/>
                            <p>hello moto 1</p>
                        </div>
                        <div className="swiper-slide">
                            <img src={"https://unsplash.it/1920/1080?random=2"} alt="img13"/>
                            <p>hello moto 2</p>
                        </div>
                        <div className="swiper-slide">
                            <img src={"https://unsplash.it/1920/1080?random=3"} alt="img13"/>
                            <p>hello moto 3</p>
                        </div>
                        <div className="swiper-slide">
                            <img src={"https://unsplash.it/1920/1080?random=4"} alt="img13"/>
                            <p>hello moto</p>
                        </div>
                        <div className="swiper-slide">
                            <img src={"https://unsplash.it/1920/1080?random=5"} alt="img13"/>
                            <p>hello moto</p>
                        </div>
                        <div className="swiper-slide">
                            <img src={"https://unsplash.it/1920/1080?random=6"} alt="img13"/>
                            <p>hello moto</p>
                        </div>
                        <div className="swiper-slide">
                            <img src={"https://unsplash.it/1920/1080?random=7"} alt="img13"/>
                            <p>hello moto</p>
                        </div>
                        <div className="swiper-slide">
                            <img src={"https://unsplash.it/1920/1080?random=8"} alt="img13"/>
                            <p>hello moto</p>
                        </div>
                        <div className="swiper-slide">
                            <img src={"https://unsplash.it/1920/1080?random=9"} alt="img13"/>
                            <p>hello moto</p>
                        </div>
                        <div className="swiper-slide">
                            <img src={"https://unsplash.it/1920/1080?random=1"} alt="img13"/>
                            <p>hello moto</p>
                        </div>
                    </div>                    
                    <div className="swiper-button-next swiper-button-white"></div>                    
                    <div className="swiper-button-prev swiper-button-white"></div>               
                    <div className="swiper-pagination swiper-pagination-white"></div>               
                </div>
            </>
        )
    }
}
export default SwiperNew