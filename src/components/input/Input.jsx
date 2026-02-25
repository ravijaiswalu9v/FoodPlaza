import styled from "styled-components";

const Input = ({ onChange, value, type, placeholder }) => {
  return (
    <StyledInput
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
};

const StyledInput = styled.input`
  color: var(--white-color);
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  border: 2px solid var(--orange-color);
  height: 40px;
  min-width: 285px;
  background-color: transparent;
  font-weight: 500;

  &::placeholder {
    font-weight: 500;
    opacity: 0.6;
    color: var(--white-color);
  }

  &:focus {
    outline: none;
    border-width: 3px;
  }
`;

export default Input;
