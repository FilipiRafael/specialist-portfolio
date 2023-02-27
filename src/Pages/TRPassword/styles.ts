import styled from 'styled-components';

interface IImage {
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
  width: 60%;
  height: 80vh;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WrapperResetPassword = styled.div`
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const WrapperInfo = styled.div`
  width: 100%;
`;

export const EmailInput = styled.input`
  width: 100%;
  height: 2.5rem;
  padding: 1rem;

  border: 1px solid #B8B8B8;
  border-radius: 8px;
`;

export const PasswordInput = styled.input`
  width: 100%;
  height: 2.5rem;
  padding: 1rem;

  border: 1px solid #B8B8B8;
  border-radius: 8px;

  margin-top: 0.5rem;
`;

export const Button = styled.button`
  width: 100%;
  height: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  background-color: #03D361;
  color: #FFF;
  border-radius: 8px;

  margin-top: 1rem;
`;

export const ProjectLogo = styled.img<IImage>`
  width: 300px;
  height: 300px;
  border-radius: 20%;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 32px;
  line-height: 36px;
  color: #000;
  opacity: 0.87;

  margin-top: 1rem;
`;