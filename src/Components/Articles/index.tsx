import { articles } from "../../mocks/articles";
import {
  Container,
  Title,
  Article,
  ArticleContent,
  ArticleContentDate,
  ArticleContentTitle,
  ArticleContentDescription,
  ArticleContentLink,
  AllArticlesLink
} from "./style";

interface ArticlesProps {
  learnMoreLink?: string;
  learnMoreText: string;
  actualPage: string;
}

export const Articles = ({ learnMoreText, learnMoreLink, actualPage }: ArticlesProps) => {
  return (
    <Container>
      {actualPage === 'Filipi Rafael' && <Title>Articles</Title>}

      {
        articles.map((article) => (
          <Article key={article.id}>
            <ArticleContent>
              <ArticleContentDate>{article.date}</ArticleContentDate>
              <ArticleContentTitle>{article.title}</ArticleContentTitle>
              <ArticleContentDescription>
                {article.description}
              </ArticleContentDescription>
              <ArticleContentLink
                href={article.link}
                target='_blank'
              >
                Try it out →
              </ArticleContentLink>
            </ArticleContent>
          </Article>
        ))
      }

      <AllArticlesLink
        href={learnMoreLink}
        target='_blank'
      >
        {learnMoreText}
      </AllArticlesLink>
    </Container>
  )
}