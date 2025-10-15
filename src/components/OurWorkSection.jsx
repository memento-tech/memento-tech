import styled from "styled-components";
import { SectionFullContainer, SectionHeader } from "./SectionComponentUtil";
import { Link } from "react-router";
import Projects from "./Projects";
import getTranslation from "../config/translationsUtil";
import { portfolioNavigation } from "../config/navigationConfig";

const OurWorkSection = ({ showAllButtonVisible = true, showTitle = true }) => {
  return (
    <SectionFullContainer>
      {showTitle && (
        <SectionHeader>
          {getTranslation("home.page.our.work.section.title")}
        </SectionHeader>
      )}
      <Projects />
      {showAllButtonVisible && (
        <ViewAllButton to={portfolioNavigation.to}>
          {getTranslation("home.page.our.work.section.see.all.button.label")}
        </ViewAllButton>
      )}
    </SectionFullContainer>
  );
};

export default OurWorkSection;

const ViewAllButton = styled(Link)`
  margin-top: 2rem;
  padding: 0.5rem 3rem;
  border: 1px solid #6b98d8;
  background-color: #6b98d8;
  border-radius: 15px;
  color: white;
`;
