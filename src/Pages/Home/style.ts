import styled from 'styled-components';

interface IAvatar {
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
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Avatar = styled.img<IAvatar>`
  width: 80px;
  height: 80px;

  border-radius: 50%;
  position: relative;

  background-color: #F5F5F5;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  color: #000;
  opacity: 0.87;

  margin-top: 1rem;
`;

export const Description = styled.span`
  font-size: 17px;
  line-height: 24px;
  font-weight: 400;
  color: #000;
  opacity: 0.6;

  margin-top: 1rem;
`;

export const ProfileLink = styled.span`
  font-size: 15px;
  line-height: 21px;
  font-weight: 400;
  color: #000;
  opacity: 0.87;

  margin-top: 1rem;

  cursor: pointer;

  &:hover {
    text-decoration-line: underline;
    text-decoration-thickness: 2px;
    text-decoration-color: rgba(0,0,0,0.87);
  }

  display: flex;
  justify-content: center;
  align-items: center;
`;