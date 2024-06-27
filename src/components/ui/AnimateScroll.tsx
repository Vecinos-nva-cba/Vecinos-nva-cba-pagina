'use client'
// components/AnimatedOnScroll.js
import { useInView } from 'react-intersection-observer';
import { ReactNode, useEffect, useState } from 'react';

interface AnimatedOnScrollProps {
  children: ReactNode;
  animationClass: string;
}

const AnimatedOnScroll = ({ children, animationClass }: AnimatedOnScrollProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  const [animateClass, setAnimateClass] = useState('');

  useEffect(() => {
    if (inView) {
      setAnimateClass(`animate__animated ${animationClass} animate__duration-8s`);
    }
  }, [inView, animationClass]);

  return (
    <div ref={ref} className={animateClass}>
      {children}
    </div>
  );
};

export default AnimatedOnScroll;
