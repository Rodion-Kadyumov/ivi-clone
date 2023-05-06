import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import TopGalleryItem from './TopGalleryItem'
import { dataMoviesTop } from '../../../../data/dataMovie'


const TopGallery: React.FC = () => {

    const tops = dataMoviesTop
    const settings = {
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 5,
        prevArrow: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 13 1 7l6-6"/></svg>,
        nextArrow: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 6-6-6-6"/></svg>
    }

    return (
        <div className="gallery__carousel">
            <div className="gallery__viewport">
                <div className="gallery__viewport-inner">
                    <div className="ivi-carousel">
                        <div className="ivi-carousel-viewport">
                            <div className="ivi-carousel-container"
                            >
                            <Slider {...settings}>
                                {tops && tops.map((top, index) =>
                                    <TopGalleryItem key={top.movie.id} data={{ id: index + 1, ...top }} />)}
                            </Slider>
                            </div>
                        </div>
                        <div className="ivi-carousel__shadow_right"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopGallery