import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { testimonials } from "../data/testimonials";
import StarIcon from "../icons/StarIcon";
import getTranslation from "../config/translationsUtil";

const transitionDuration = 300;

const TestimonialsCarousel = () => {
  const slides = [
    testimonials[testimonials.length - 1],
    ...testimonials,
    testimonials[0],
  ];

  const [index, setIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slidesRef = useRef(null);
  const startX = useRef(null);

  const goTo = (newIndex) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setIndex(newIndex);
  };

  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  useEffect(() => {
    const el = slidesRef.current;
    if (!el) return;

    el.style.transition = `transform ${transitionDuration}ms ease-in-out`;
    el.style.transform = `translateX(-${index * 100}%)`;

    const handleTransitionEnd = () => {
      setIsTransitioning(false);

      if (index === slides.length - 1) {
        el.style.transition = "none";
        setIndex(1);
        el.style.transform = `translateX(-100%)`;
      } else if (index === 0) {
        el.style.transition = "none";
        setIndex(slides.length - 2);
        el.style.transform = `translateX(-${(slides.length - 2) * 100}%)`;
      }
    };

    el.addEventListener("transitionend", handleTransitionEnd);
    return () => el.removeEventListener("transitionend", handleTransitionEnd);
  }, [index, slides.length]);

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (startX.current === null) return;
    const diff = e.changedTouches[0].clientX - startX.current;
    const threshold = 50;
    if (Math.abs(diff) > threshold) {
      diff > 0 ? prev() : next();
    }
    startX.current = null;
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  return (
    <Container onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <ArrowLeft onClick={prev}>‹</ArrowLeft>

      <Viewport>
        <Slides ref={slidesRef}>
          {slides.map((testimonial, i) => (
            <Slide key={i}>
              <StarsContainer>
                {[...Array(5)].map((_, idx) => (
                  <StarIcon key={idx} />
                ))}
              </StarsContainer>
              <Text>{getTranslation(testimonial.description)}</Text>
              <UserContainer>
                <UserImage src={testimonial.image} alt="user" />
                <UserDetails>
                  <UserName>{getTranslation(testimonial.name)}</UserName>
                  <UserTitle>{getTranslation(testimonial.title)}</UserTitle>
                </UserDetails>
              </UserContainer>
            </Slide>
          ))}
        </Slides>
      </Viewport>

      <ArrowRight onClick={next}>›</ArrowRight>
    </Container>
  );
};

export default TestimonialsCarousel;

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
  padding: 1rem;
  box-sizing: border-box;
  overflow: hidden;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Viewport = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 14px;
`;

const Slides = styled.div`
  display: flex;
  width: 100%;
`;

const Slide = styled.div`
  flex: 0 0 100%;
  box-sizing: border-box;
  padding: 1rem 2rem;
  background: #ffffff;
  min-height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
`;

const Arrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: ${(props) => props.theme.headerBackground};
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  z-index: 10;
`;

const ArrowLeft = styled(Arrow)`
  left: 8px;
`;
const ArrowRight = styled(Arrow)`
  right: 8px;
`;

const StarsContainer = styled.div`
  display: flex;
  gap: 4px;
`;

const Text = styled.p`
  text-align: center;
  line-height: 25px;
  letter-spacing: 1px;
`;

const UserContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const UserImage = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  margin-right: 1rem;
  object-fit: cover;
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
`;

const UserName = styled.p`
  margin: 0;
  font-weight: 600;
`;

const UserTitle = styled.p`
  margin: 0;
  opacity: 0.7;
`;
