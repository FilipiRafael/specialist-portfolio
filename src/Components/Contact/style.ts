import styled from "styled-components";

interface WrapperProps {
  isSpaceBetween: boolean;
}

export const Container = styled.div`
  margin: 7rem 0 4rem 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Wrapper = styled.div<WrapperProps>`
  width: 100%;

  margin-top: 1rem;

  display: flex;
  align-items: center;
  justify-content: ${props => props.isSpaceBetween ? 'space-between' : 'flex-start'};
`;

export const Title = styled.h3`
  font-size: 17px;
  line-height: 24px;
  font-weight: 400;

  color: #000;
  opacity: 0.87;
`;

export const SocialLink = styled.a`
  font-size: 15px;
  line-height: 21px;
  font-weight: 400;

  margin-right: 1rem;

  cursor: pointer;

  &:hover {
    text-decoration-line: underline;
    text-decoration-color: rgba(0,0,0,0.87);
    text-decoration-thickness: 2px;
  }
`;