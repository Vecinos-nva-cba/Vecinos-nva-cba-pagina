

"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperObject } from "swiper";
import { Carousel } from "keep-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./muestra.css";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import { ImagenLugar } from "./ImagenLugar";


interface Props {
  imagenes: string[];
  titulo: string;
  className?: string;
}

export const MuestraLugar = ({ imagenes, titulo, className }: Props) => {


  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();

  return (
    <div className={className}>
      <Swiper
        style={ {
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        } as React.CSSProperties
        }
        spaceBetween={ 10 }
        navigation={ true }
        autoplay={{
          delay: 2500
        }}
        thumbs={ {
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
        } }
        modules={ [ FreeMode, Navigation, Thumbs, Autoplay ] }
        className="mySwiper2"
      >
        {imagenes.map((imagen) => (
          <SwiperSlide key={imagen}>
            <ImagenLugar
                width={1024}
                height={800}
                src={imagen}
                alt={titulo}
                className="rounded-lg object-fill"
                 
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {imagenes.map((imagen) => (
          <SwiperSlide key={imagen}>
            <ImagenLugar
                width={1024}
                height={800}
                src={imagen}
                alt={titulo}
                className="rounded-lg object-fill"
                 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
