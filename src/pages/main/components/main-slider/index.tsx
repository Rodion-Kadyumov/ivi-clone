import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { IMainBanner } from '../../../../models/Movie'
import { mainSliders } from '../../../../data/dataMovie'
import MainSliderCard from './MainSliderCard'

const MainSlider: React.FC = () => {

    const data: IMainBanner[] = mainSliders
    const settings = {
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '60px',
        centerMode: true,
        speed: 3000,
        dataAriaHidden: 'false',
        prevArrow: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 13 1 7l6-6"/></svg>,
        nextArrow: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 6-6-6-6"/></svg>,
    }

    return (
        <div className="promoSlider promoSlider_version_2 home__promoSlider">
            <div className="ivi-carousel ivi-carousel-initialized">
                <div className="ivi-carousel-viewport ivi-carousel__promoMod">
                    <div
                        className="ivi-carousel-container"
                        style={{
                            width: `1400px`,
                            textAlign: 'center',
                        }}
                        
                    >
                        <Slider {...settings}>
                            {data && data.map(banner => <MainSliderCard key={banner.id} data={banner} />)}
                        </Slider>
                    </div>
                </div>
                <div className="ivi-carousel__shadow_right"></div>
            </div>
        </div>
    )
}

export default MainSlider