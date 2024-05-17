'use client'

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "./swipper.css";
import { Card } from "./Card";
import Image from "next/image";

interface Card {
  titulo: string;
  descripcion: string;
  url: string;
  img: string;
}

interface Props {
  cards: Card[];
}

export const SwipperCard: React.FC<Props> = ({ cards }) => {
  return (
    <Swiper
      pagination={true}
      className="mySwiper"
      slidesPerView={1} // Mostrar 3 tarjetas a la vez en escritorio
      breakpoints={{
        768: {
          slidesPerView: 3, // Mostrar 1 tarjeta a la vez en dispositivos móviles
        },
      }}
    >
      {cards.map((card, index) => (
        <SwiperSlide key={index}>
          <Card
            titulo={card.titulo}
            descripcion={card.descripcion}
            url={card.url}
            img={card.img}
          />
          {/* <Image src='/wpp.jpg' alt="Foto" width={100} height={100}/> */}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
