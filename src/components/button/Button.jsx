import styled from "styled-components";

const Button = ({ children, variant = "primary", onClick, ...rest }) => {
  console.dir(rest);
  return (
    <StyledButton
      $variant={variant}
      onClick={onClick}
      $isActive={rest.isActive}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  color: var(--white-color);
  background-color: var(--orange-color);
  height: ${(props) => (props.$variant === "primary" ? "2.5rem" : "1.2rem")};
  border: 1px solid
    ${(props) =>
      !props.$isActive ? "var(--orange-color)" : "var(--white-color)"};
  border-radius: 0.5rem;
  padding: ${(props) =>
    props.$variant === "primary" ? "0.25rem 1rem" : ".8rem .6rem"};
  font-weight: 600;
  letter-spacing: 8%;

  display: flex;
  align-items: center;

  cursor: pointer;

  &:hover {
    background-color: var(--OrangeDark-color);
  }
`;

export default Button;
