import styled from "styled-components";

const Input = ({
  title,
  value,
  placeholder,
  onChange,
  widthPerc = 100,
  type = "text",
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
        type={type}
      />
    </InputContainer>
  );
};

export default Input;

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

const InputStyled = styled.input`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: none;
  &:focus {
    outline: 2px solid #ddddddc0;
  }
  box-shadow: none;
  all: unset;

  width: 100%;
  text-align: start;
  border: 1px solid #8b8b8b8e;
  border-radius: 5px;
  padding: 5px 10px;
  box-sizing: border-box;
`;
