import styled from "styled-components";

export const SectionFullContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 3rem;

  @media screen and (max-width: 600px) {
    padding-top: 2rem;
  }

  @media screen and (min-width: 600px) and (max-width: 1000px) {
    margin-top: 2rem;
    padding-top: 0;

    &:first-child {
      margin-top: 4rem;
    }
  }
`;

export const SectionHeader = styled.h2`
  color: ${(props) => props.theme.sectionHeaderColor};
  text-transform: uppercase;
  font-weight: 400;
  font-size: 20px;
`;
