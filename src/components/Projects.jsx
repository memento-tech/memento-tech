import styled from "styled-components";
import littleZenImage from "../assets/LittleZen.png";
import myGoalsAppImage from "../assets/MyGoalsAPP.png";
import ogledaloDrustvaWebpageImage from "../assets/ogledalo-drustva-webpage.png";
import getTranslation from "../config/translationsUtil";
import SlideInComponent from "./SlideInComponent";

const Projects = () => {
  return (
    <ProjectsContainer>
      <SlideInComponent>
        <ProjectContainer style={{ backgroundColor: "#E5F2F8" }}>
          <ProjectImageContainer $bg="linear-gradient(#80CBF3, #60A6CC)">
            <ProjectImage src={littleZenImage} alt="Little Zen website image" />
          </ProjectImageContainer>
          <ProjectDescriptionContainer>
            <ProjectTitle>
              {getTranslation("home.page.our.work.section.project.yoga.title")}
            </ProjectTitle>
            <ProjectSubtitle>
              {getTranslation(
                "home.page.our.work.section.project.yoga.subtitle"
              )}
            </ProjectSubtitle>
            <ProjectText>
              {getTranslation(
                "home.page.our.work.section.project.yoga.description"
              )}
            </ProjectText>
          </ProjectDescriptionContainer>
        </ProjectContainer>
      </SlideInComponent>
      <SlideInComponent leftToRight={false}>
        <ProjectContainer style={{ backgroundColor: "#F0FFF7" }}>
          <ProjectImageContainer
            $bg="linear-gradient(#69cc60, #80f3b4)"
            style={{ overflow: "hidden" }}
          >
            <ProjectImage
              src={myGoalsAppImage}
              alt="My Goals app image"
              style={{ height: "104%", width: "104%" }}
            />
          </ProjectImageContainer>
          <ProjectDescriptionContainer>
            <ProjectTitle>
              {getTranslation("home.page.our.work.section.project.goals.title")}
            </ProjectTitle>
            <ProjectSubtitle>
              {getTranslation(
                "home.page.our.work.section.project.goals.subtitle"
              )}
            </ProjectSubtitle>
            <ProjectText>
              {getTranslation(
                "home.page.our.work.section.project.goals.description"
              )}
            </ProjectText>
          </ProjectDescriptionContainer>
        </ProjectContainer>
      </SlideInComponent>
      <SlideInComponent>
        <ProjectContainer style={{ backgroundColor: "#FCF6E5" }}>
          <ProjectImageContainer $bg="linear-gradient(#FADB60, #F5BB81)">
            <ProjectImage
              src={ogledaloDrustvaWebpageImage}
              alt="Ogledalo drustva home page image"
            />
          </ProjectImageContainer>
          <ProjectDescriptionContainer>
            <ProjectTitle>
              {getTranslation(
                "home.page.our.work.section.project.ogledlo.drustva.title"
              )}
            </ProjectTitle>
            <ProjectSubtitle>
              {getTranslation(
                "home.page.our.work.section.project.ogledlo.drustva.subtitle"
              )}
            </ProjectSubtitle>
            <ProjectText>
              {getTranslation(
                "home.page.our.work.section.project.ogledlo.drustva.description"
              )}
            </ProjectText>
          </ProjectDescriptionContainer>
        </ProjectContainer>
      </SlideInComponent>
    </ProjectsContainer>
  );
};

export default Projects;

const ProjectsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 20px;
`;

const ProjectContainer = styled.div`
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #f0fff7;

  border-radius: 10px;
  box-shadow: -10px 10px 50px #00000041;
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.borderColor};
  color: #000000;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1ft;
    grid-template-rows: 1fr 1fr;
  }
`;

const ProjectImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => props.$bg || "transparent"};
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  object-position: center;
`;

const ProjectDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 3rem 2rem 3rem 1rem;
  margin: auto;
  width: 80%;
`;

const ProjectTitle = styled.h3`
  padding: 0;
  margin: 0;
`;

const ProjectSubtitle = styled.h4`
  padding: 0;
  margin: 0;
  font-size: 12px;
`;

const ProjectText = styled.p`
  text-align: start;
  letter-spacing: 1px;
  font-size: 12px;
  line-height: 25px;
  margin-top: 2rem;
  margin-bottom: 0;
`;
