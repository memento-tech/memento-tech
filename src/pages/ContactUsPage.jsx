import styled from "styled-components";
import GetInTouchSection from "../components/GetInTouchSection";

const ContactUsPage = () => {
  return (
    <Container>
      <GetInTouchSection />
    </Container>
  );
};

export default ContactUsPage;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;
