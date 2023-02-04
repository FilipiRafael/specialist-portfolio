import styled from "styled-components";

interface IMenuItem {
  onClick: () => void;
  isActive: boolean;
}

export const Container = styled.nav`
  width: 100vw;
  height: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 40%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const MenuItem = styled.h2<IMenuItem>`
  font-size: 1rem;
  font-weight: 400;
  line-height: 24px;

  animation: flash;
  animation-duration: 1s;

  cursor: pointer;

  color: #000;
  opacity: ${props => props.isActive ? 1 : 0.6};

  &:hover {
    opacity: 1;
  }
`