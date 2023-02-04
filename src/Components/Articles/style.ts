import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  margin-top: 7rem;  
`;

export const Title = styled.div`
  font-size: 17px;
  line-height: 24px;
  font-weight: 500;
  color: #000;
  opacity: 0.87;
`;

export const Article = styled.div`
  margin-top: 3rem;
  width: 100%;
`;

export const ArticleContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const ArticleContentDate = styled.span`
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;

  color: #000;
  opacity: 0.38;
`;

export const ArticleContentTitle = styled.h3`
  font-size: 17px;
  line-height: 24px;
  font-weight: 500;

  margin-top: 0.5rem;
  
  color: #000;
  opacity: 0.87;
`;

export const ArticleContentDescription = styled.span`
  font-size: 17px;
  line-height: 24px;
  font-weight: 400;

  margin-top: 0.5rem;

  color: #000;
  opacity: 0.60;
`;

export const ArticleContentLink = styled.a`
  font-size: 15px;
  line-height: 21px;
  font-weight: 500;

  margin-top: 0.5rem;
  cursor: pointer;

  text-decoration-line: none;

  &:hover {
    text-decoration-line: underline;
    text-decoration-thickness: 2px;
    text-decoration-color: rgba(0,0,0,0.87);
  }

  color: #000;
  opacity: 0.87;
`;

export const AllArticlesLink = styled.a`
  margin-top: 3rem;

  font-size: 17px;
  line-height: 24px;

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