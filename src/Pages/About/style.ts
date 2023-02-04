import styled from "styled-components";

interface AvatarProps {
  src: any;
}

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

  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 26px;
  line-height: 36px;
  color: #000;
  opacity: 0.87;

  margin-top: 2rem;
`;

export const Description = styled.span`
  font-size: 15px;
  line-height: 21px;
  font-weight: 400;

  margin-top: 1rem;

  text-align: start;

  color: #000;
  opacity: 0.60;
`;

export const Avatar = styled.img<AvatarProps>`
  width: 145px;
  height: 145px;

  border-radius: 50%;
`;

export const AboutLink = styled.a`
  margin-top: 1rem;

  font-size: 15px;
  line-height: 21px;

  color: #000;
  opacity: 0.87;

  cursor: pointer;

  text-decoration-line: none;

  &:hover {
    text-decoration-line: underline;
    text-decoration-thickness: 2px;
    text-decoration-color: rgba(0,0,0,0.87);
  }
`;