import styled from "styled-components";
import Input from "../components/Input";
import TextInput from "../components/TextInput";
import EmailIcon from "../icons/EmailIcon";
import PhoneIcon from "../icons/PhoneIcon";
import LocationIcon from "../icons/LocationIcon";
import { useState } from "react";
import getTranslation from "../config/translationsUtil";

const GetInTouchSection = () => {
  const [firstName, setFirstName] = useState();

  return (
    <>
      <HeaderContainer>
        <PageHeader>{getTranslation("contact.page.title")}</PageHeader>
        <PageDescription>
          {getTranslation("contact.page.subtitle.one")} <br />
          {getTranslation("contact.page.subtitle.two")}
        </PageDescription>
      </HeaderContainer>
      <ContactContainer>
        <FormContainer>
          <FormTitle>
            {getTranslation("contact.page.form.message.title")}
          </FormTitle>
          <FormNameInputContainer>
            <Input
              title={getTranslation(
                "contact.page.form.message.first.name.label"
              )}
              value={firstName}
              onChange={(event) => setFirstName(event.value)}
              placeholder={getTranslation(
                "contact.page.form.message.first.name.placeholder"
              )}
              required={true}
            />
            <Input
              title={getTranslation(
                "contact.page.form.message.last.name.label"
              )}
              value={firstName}
              onChange={(event) => setFirstName(event.value)}
              placeholder={getTranslation(
                "contact.page.form.message.last.name.placeholder"
              )}
              required={true}
            />
          </FormNameInputContainer>
          <Input
            title={getTranslation("contact.page.form.message.email.label")}
            value={firstName}
            onChange={(event) => setFirstName(event.value)}
            placeholder={getTranslation(
              "contact.page.form.message.email.placeholder"
            )}
            required={true}
          />
          <Input
            title={getTranslation(
              "contact.page.form.message.company.name.label"
            )}
            value={firstName}
            onChange={(event) => setFirstName(event.value)}
            placeholder={getTranslation(
              "contact.page.form.message.company.name.placeholder"
            )}
          />
          <TextInput
            title={getTranslation(
              "contact.page.form.contact.your.message.label"
            )}
            value={firstName}
            onChange={(event) => setFirstName(event.value)}
            placeholder={getTranslation(
              "contact.page.form.contact.your.message.placeholder"
            )}
            required={true}
            maxLength={530}
          />
        </FormContainer>
        <FormContainer>
          <FormTitle>
            {getTranslation("contact.page.form.contact.information.title")}
          </FormTitle>
          <EmailIcon height={40} />
          <ContactInfo href="mailto:info@memento-tech.com">
            info@memento-tech.com
          </ContactInfo>
          <PhoneIcon height={40} />
          <ContactInfo href="tel:+381641390206">
            (+381) 64 139 02 06
          </ContactInfo>
          <LocationIcon height={40} />
          <ContactInfo
            href="https://www.google.com/maps/place/Ni%C5%A1/"
            target="_blank"
          >
            Niš, Serbia
          </ContactInfo>
        </FormContainer>
      </ContactContainer>
    </>
  );
};

export default GetInTouchSection;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  height: 40vh;
  min-height: 300px;
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.constactUsHeaderLeft},
    ${(props) => props.theme.constactUsHeaderRight}
  );
  color: ${(props) => props.theme.contactUsHedaerColor};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const PageHeader = styled.h1`
  font-size: 60px;
  margin-bottom: 10px;
`;

const PageDescription = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
`;

const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;

  @media screen and (max-width: 600px) {
    width: 90%;
    flex-direction: column;
  }

  @media screen and (max-width: 1000px) {
    width: 90%;
  }
`;

const FormContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
  gap: 20px;
  width: 100%;
  padding: 2rem 1rem;
  margin: 0 1rem;
  margin-top: 2rem;

  color: #000;
  background-color: #fff;
  border: 1px solid #fff;
  border-top: none;
  border-radius: 20px;
  box-shadow: -10px 5px 20px #7474748c;

  @media screen and (max-width: 600px) {
    box-sizing: border-box;
    margin: 0;
    margin-top: 2rem;
  }
`;

const FormTitle = styled.h2``;

const FormNameInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

const ContactInfo = styled.a`
  margin-top: 0;
`;
