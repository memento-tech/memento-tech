import styled from "styled-components";
import StarIcon from "../icons/StarIcon";
import getTranslation from "../config/translationsUtil";
import { testimonials } from "../data/testimonials";

const TestimonialCardsFull = () => {
  return (
    <TestimonialCardsContainer>
      {testimonials.map((testimonail, index) => (
        <Card key={index}>
          <StarsContainer>
            {[...Array(5)].map((_, index) => (
              <StarIcon key={index} />
            ))}
          </StarsContainer>
          <Text>{getTranslation(testimonail.description)}</Text>
          <UserContainer>
            <UserImage src={testimonail.image} alt="testimonial user" />
            <UserDetails>
              <UserName>{getTranslation(testimonail.name)}</UserName>
              <UserTitle>{getTranslation(testimonail.title)}</UserTitle>
            </UserDetails>
          </UserContainer>
        </Card>
      ))}
    </TestimonialCardsContainer>
  );
};

export default TestimonialCardsFull;

const TestimonialCardsContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 600px) {
    display: none;
    visibility: hidden;
  }

  @media screen and (min-width: 600px) and (max-width: 1000px) {
    width: 100%;
  }
`;

const Card = styled.div`
  box-sizing: border-box;
  width: 30%;
  padding: 2rem 3rem;
  height: 400px;
  background-color: ${(props) => props.theme.testimonialsCardBackgroud};
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:first-child {
    height: 370px;
    background-color: transparent;
  }

  &:last-child {
    height: 370px;
    background-color: transparent;
  }

  @media screen and (min-width: 600px) and (max-width: 1000px) {
    height: auto;
    padding: 2rem 1rem;
    align-items: center;
  }
`;

const StarsContainer = styled.div`
  width: fit-content;
`;

const Text = styled.p`
  text-align: start;
  line-height: 25px;
  letter-spacing: 1px;

  @media screen and (min-width: 600px) and (max-width: 1000px) {
    text-align: center;
  }
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
  background-color: red;
  margin-right: 1rem;
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: flex-start;
`;

const UserName = styled.p`
  padding: 0;
  margin: 0;
  text-align: start;
`;

const UserTitle = styled.p`
  padding: 0;
  margin: 0;
  text-align: start;
`;
