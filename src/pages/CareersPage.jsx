import styled from "styled-components";
import getTranslation from "../config/translationsUtil";

const CareersPage = () => {
  return (
    <PageContainer>
      <PageTitle>{getTranslation("careers.page.title")}</PageTitle>
      <NoJobOpeningsMessage>
        {getTranslation("careers.page.no.job.openings.message")}
      </NoJobOpeningsMessage>
    </PageContainer>
  );
};

export default CareersPage;

const PageContainer = styled.div`
  width: 100%;
  min-height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const PageTitle = styled.h1``;

const NoJobOpeningsMessage = styled.h3`
  font-weight: 100;
`;
