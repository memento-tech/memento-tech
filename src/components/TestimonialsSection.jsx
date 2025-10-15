import styled from "styled-components";
import { SectionFullContainer, SectionHeader } from "./SectionComponentUtil";
import StarIcon from "../icons/StarIcon";
import testUserOne from "../assets/testUserOne.png";
import testUserTwo from "../assets/testUserTwo.png";
import testUserThree from "../assets/testUserThree.png";
import getTranslation from "../config/translationsUtil";

const TestimonialsSection = () => {
  return (
    <SectionFullContainer>
      <SectionHeader>
        {getTranslation("home.page.testimonials.section.title")}
      </SectionHeader>
      <Subheader>
        {getTranslation("home.page.testimonials.section.subtitle")}
      </Subheader>
      <TestimonialCardsContainer>
        <Card>
          <StarsContainer>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </StarsContainer>
          <Text>
            {getTranslation(
              "home.page.testimonials.section.user.one.description"
            )}
          </Text>
          <UserContainer>
            <UserImage src={testUserOne} alt="User 1 image"/>
            <UserDetails>
              <UserName>
                {getTranslation("home.page.testimonials.section.user.one.name")}
              </UserName>
              <UserDescription>
                {getTranslation(
                  "home.page.testimonials.section.user.one.title"
                )}
              </UserDescription>
            </UserDetails>
          </UserContainer>
        </Card>
        <Card>
          <StarsContainer>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </StarsContainer>
          <Text>
            {getTranslation(
              "home.page.testimonials.section.user.two.description"
            )}
          </Text>
          <UserContainer>
            <UserImage src={testUserTwo} alt="User 2 image"/>
            <UserDetails>
              <UserName>
                {getTranslation("home.page.testimonials.section.user.two.name")}
              </UserName>
              <UserDescription>
                {getTranslation(
                  "home.page.testimonials.section.user.two.title"
                )}
              </UserDescription>
            </UserDetails>
          </UserContainer>
        </Card>
        <Card>
          <StarsContainer>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </StarsContainer>
          <Text>
            {getTranslation(
              "home.page.testimonials.section.user.three.description"
            )}
          </Text>
          <UserContainer>
            <UserImage src={testUserThree} alt="User 3 image"/>
            <UserDetails>
              <UserName>
                {getTranslation(
                  "home.page.testimonials.section.user.three.name"
                )}
              </UserName>
              <UserDescription>
                {getTranslation(
                  "home.page.testimonials.section.user.three.title"
                )}
              </UserDescription>
            </UserDetails>
          </UserContainer>
        </Card>
      </TestimonialCardsContainer>
    </SectionFullContainer>
  );
};

export default TestimonialsSection;

const Subheader = styled.h3`
  width: 120px;
`;

const TestimonialCardsContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
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
`;

const StarsContainer = styled.div`
  width: fit-content;
`;

const Text = styled.p`
  text-align: start;
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

const UserDescription = styled.p`
  padding: 0;
  margin: 0;
  text-align: start;
`;
