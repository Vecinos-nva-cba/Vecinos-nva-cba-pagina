import React from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./swipper.css";
import { Card } from "./Card";

SwiperCore.use([Pagination]);

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
    <Swiper pagination={true} className="mySwiper">
      {cards.map((card, index) => (
        <SwiperSlide key={index}>
          <Card
            titulo={card.titulo}
            descripcion={card.descripcion}
            url={card.url}
            img={card.img}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
