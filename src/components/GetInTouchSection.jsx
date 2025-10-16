import styled from "styled-components";
import Input from "../components/Input";
import TextInput from "../components/TextInput";
import EmailIcon from "../icons/EmailIcon";
import PhoneIcon from "../icons/PhoneIcon";
import LocationIcon from "../icons/LocationIcon";
import { useEffect, useState } from "react";
import getTranslation from "../config/translationsUtil";

const GetInTouchSection = () => {
  const [showMessage, setShowMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (checkValidity()) {
      setIsError(true);
      setShowMessage(
        getTranslation("contact.page.form.message.missing.fields")
      );
      return;
    }

    setIsSubmitting(true);
    setShowMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "8d2759db-025f-4111-b024-0637edabb9b5",
          subject: "New message from contact " + firstName,
          from_name: `${firstName} ${lastName}`,
          email: email,
          company: company,
          message: message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsError(false);
        setShowMessage(
          getTranslation("contact.page.form.message.send.success")
        );
        setFirstName("");
        setLastName("");
        setEmail("");
        setCompany("");
        setMessage("");
      } else {
        setIsError(true);
        setShowMessage(getTranslation("contact.page.form.message.send.failed"));
      }
    } catch (error) {
      setIsError(true);
      setShowMessage(getTranslation("contact.page.form.message.send.error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (showMessage !== "" && !isError) {
      setTimeout(() => {
        setMessage("");
        setIsError(false);
      }, 3000);
    }
  }, [showMessage, isError, setMessage, setIsError]);

  const checkValidity = () => {
    return (
      firstName === "" || lastName === "" || email === "" || message === ""
    );
  };

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
        <FormContainer onSubmit={handleSubmit}>
          <FormTitle>
            {getTranslation("contact.page.form.message.title")}
          </FormTitle>
          <FormMessage style={{ color: isError ? "red" : "000" }}>
            {showMessage}
          </FormMessage>

          <FormNameInputContainer>
            <Input
              title={getTranslation(
                "contact.page.form.message.first.name.label"
              )}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder={getTranslation(
                "contact.page.form.message.first.name.placeholder"
              )}
              required={true}
            />
            <Input
              title={getTranslation(
                "contact.page.form.message.last.name.label"
              )}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder={getTranslation(
                "contact.page.form.message.last.name.placeholder"
              )}
              required={true}
            />
          </FormNameInputContainer>

          <Input
            title={getTranslation("contact.page.form.message.email.label")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={getTranslation(
              "contact.page.form.message.email.placeholder"
            )}
            required={true}
          />

          <Input
            title={getTranslation(
              "contact.page.form.message.company.name.label"
            )}
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder={getTranslation(
              "contact.page.form.message.company.name.placeholder"
            )}
          />

          <TextInput
            title={getTranslation(
              "contact.page.form.contact.your.message.label"
            )}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={getTranslation(
              "contact.page.form.contact.your.message.placeholder"
            )}
            required={true}
            maxLength={530}
          />

          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting
              ? getTranslation(
                  "contact.page.form.message.submiting.button.label"
                )
              : getTranslation("contact.page.form.message.submit.button.label")}
          </SubmitButton>
        </FormContainer>

        <FormContainer as="div">
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

const FormContainer = styled.form`
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

const FormTitle = styled.h2`
  margin-bottom: 0;
`;

const FormMessage = styled.p`
  padding: 0;
  margin: 0;
  font-size: 12px;
`;

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

const SubmitButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;

  border: 1px solid #012f5b;
  border-radius: 5px;

  padding: 2px 10px;
  font-family: inherit;

  &:hover {
    background-color: #012f5b;
    scale: 1.1;
    color: #fff;
  }
`;
