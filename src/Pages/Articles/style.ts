import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #FFF;
`;

export const Wrapper = styled.div`
  width: 35%;

  animation: jello;
  animation-duration: 1s;

  margin-top: 5rem;

  @media (max-width: 1112px) {
    width: 60%;
  }

  @media (max-width: 780px) {
    width: 80%;
  }

  @media (max-width: 640px) {
    width: 90%;
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 26px;
  line-height: 36px;
  color: #000;
  opacity: 0.87;

  margin-top: 1rem;
`;