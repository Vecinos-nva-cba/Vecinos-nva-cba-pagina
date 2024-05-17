import React, { useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import CardServer from './CardServer';

interface Props {
  card: {
    titulo: string;
    descripcion: string;
    url: string;
    img: string;
  };
}

const CardClient: React.FC<Props> = ({ card }) => {
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => console.log('You swiped left.'),
    onSwipedRight: () => console.log('You swiped right.'),
  });

  return (
    <div {...swipeHandlers}>
      <CardServer {...card} />
    </div>
  );
};

export default CardClient;