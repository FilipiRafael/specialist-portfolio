import styled from 'styled-components';

interface ILogo {
  src: any;
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: '#FFF';

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: jello;
  animation-duration: 1s;

  padding: 0 2rem;
`;

export const Logo = styled.img<ILogo>`
  width: 180px;
  height: 180px;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
  text-align: center;
`;

export const Description = styled.h2`
  font-size: 0.9rem;
  font-weight: normal;
  color: #333333;
  text-align: center;

  margin: 1rem 0;
`;

export const Button = styled.a`
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;

  color: #FFF;
  font-weight: bold;
  font-size: 1rem;
  text-decoration: none;
  background-color: #6249C5;

  margin-top: 1rem;

  &:hover {
    background-color: #7662c8;
  }
`;