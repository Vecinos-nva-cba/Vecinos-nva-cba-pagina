

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
import { Imagen } from "./Imagen";


interface Props {
  imagenes: string[];
  titulo: string;
  className?: string;
}

export const MuestraLugar = ({ imagenes, titulo, className }: Props) => {


  return (
    <Carousel indicatorsType="ring" indicators={true}>
      {
        imagenes.map(imagen => (
          <Image width={300} height={150} src={imagen} alt={titulo} key={imagen}/>
        ))
      }
    </Carousel>
  )
};
