import { useEffect, useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";

const SlideInSection = ({ children, leftToRight = true }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const currentRef = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.4 }
    );

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <AnimatedDiv ref={ref} $isVisible={isVisible} $leftToRight={leftToRight}>
      {children}
    </AnimatedDiv>
  );
};

export default SlideInSection;

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const AnimatedDiv = styled.div`
  opacity: 0;
  transform: ${({ $leftToRight }) =>
    $leftToRight ? "translateX(-100px)" : "translateX(100px)"};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;

  ${({ $isVisible, $leftToRight }) =>
    $isVisible &&
    css`
      opacity: 1;
      transform: translateX(0);
      animation: ${$leftToRight ? slideInLeft : slideInRight} 0.6s ease-out
        forwards;
    `}
`;
