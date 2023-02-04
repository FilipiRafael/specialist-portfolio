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

export const Articles = () => {
  return (
    <Container>
      <Title>Articles</Title>

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

      <AllArticlesLink>View all articles →</AllArticlesLink>
    </Container>
  )
}