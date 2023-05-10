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

  @media (max-width: 1112px) {
    width: 60%;
  }

  @media (max-width: 780px) {
    width: 80%;
  }

  @media (max-width: 640px) {
    width: 90%;
  }

  @media (max-width: 560px) {
    width: 100%;
  }  
`;

export const MenuItem = styled.h2<IMenuItem>`
  font-size: 1rem;
  font-weight: 400;
  line-height: 24px;

  @media (max-width: 440px) {
    font-size: 0.85rem;
  }

  animation: jello;
  animation-duration: 1s;

  cursor: pointer;

  color: #000;
  opacity: ${props => props.isActive ? 1 : 0.6};

  &:hover {
    opacity: 1;
  }
`