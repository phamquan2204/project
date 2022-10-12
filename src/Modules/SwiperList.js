import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { InforCard, BannerCard } from './InforCard.js'
import img from '../Assets/Images/img.jpg'


import { IMG_BASE_URL, W500 } from '../Services/Variables.js'

// Swiper Lib
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

import "../Assets/Styles/SwiperList.css";

// import required modules
import { Navigation, Pagination, Autoplay, Keyboard, FreeMode, Thumbs } from "swiper";


export function SwiperEffectFade(props) {
    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                    "--swiper-navigation-size": "1.5em",
                }}
                slidesPerView={6}
                spaceBetween={0}
                slidesPerGroup={2}
                loop={true}
                loopFillGroupWithBlank={true}
                navigation={true}
                effect={"fade"}
                keyboard={{
                    enabled: false
                }}
                modules={[Navigation]}
                className="mySwiper"
            >
                {props.datas.map(data =>
                    <SwiperSlide className="mySwiperSlide infor-swiper col-lg-2 col-md-3 col-5">
                        <InforCard
                            id={data.id}
                            name={data.name}
                            title={data.title}
                            poster_path={data.poster_path}
                            profile_path={data.profile_path}
                            media_type={data.media_type || props.type}
                            vote_average={data.vote_average}
                            popularity={data.popularity}
                        />
                    </SwiperSlide>
                )}
            </Swiper>
        </>
        // />
    )
}

const cutPara = (para) => {
    let newPara = ''
    if (para.length > 200) {
        newPara = para.slice(0, 199).concat('...')
    } else { newPara = para }
    return newPara
}

export function SwiperNavigation(props) {
    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-navigation-size": "1.5em",
                    "--swiper-pagination-color": "#fff",
                }}
                modules={[Navigation, Autoplay, Keyboard]}
                keyboard={{ clickable: true }}
                autoplay={{ delay: 1000 }}
                navigation={true}
                loop={true}
                className="mySwiper banner-swiper">
                {props.datas.map((data, index) => {
                    if (index <= 6) {
                        return (
                            <SwiperSlide className="swiper-navigation mySwiperSlide ">
                                <BannerCard
                                    id={data.id}
                                    name={data.name}
                                    title={data.title}
                                    backdrop_path={data.backdrop_path}
                                    media_type={data.media_type}
                                    vote_average={data.vote_average}
                                    airDate={data.first_air_date || data.release_date}
                                    overview={cutPara(data.overview)}
                                />
                            </SwiperSlide>)
                    }
                    console.log(data)
                }
                )}
            </Swiper>
        </>
    )
}
