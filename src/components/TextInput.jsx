import styled from "styled-components";

const TextInput = ({
  title,
  value,
  placeholder,
  onChange,
  widthPerc = 100,
  maxLength = 100,
  required = false,
}) => {
  return (
    <InputContainer $widthPerc={widthPerc}>
      <InputTitle>
        {title} {required && "*"}
      </InputTitle>
      <InputStyled
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
      />
    </InputContainer>
  );
};

export default TextInput;

const InputContainer = styled.div`
  width: ${(props) => props.$widthPerc + "%"};

  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const InputTitle = styled.i`
  width: 100%;
  text-align: start;
  margin-bottom: 5px;
  font-size: 12px;
`;

const InputStyled = styled.textarea`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: none;
  &:focus {
    outline: 2px solid #ddddddc0;
  }
  box-shadow: none;

  width: 100%;
  text-align: start;
  border: 1px solid #8b8b8b8e;
  border-radius: 5px;
  padding: 5px 10px;
  box-sizing: border-box;
  resize: none;
  height: 200px;
  font-family: inherit;
  font-weight: 100;
  font-size: 14px;
`;
