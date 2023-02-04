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

  animation: flash;
  animation-duration: 1s;

  margin-top: 5rem;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 26px;
  line-height: 36px;
  color: #000;
  opacity: 0.87;

  margin-top: 1rem;
`;