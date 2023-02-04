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
} from "./style"

export const Articles = () => {
  return (
    <Container>
      <Title>Articles</Title>

      <Article>
        <ArticleContent>
          <ArticleContentDate>2022</ArticleContentDate>
          <ArticleContentTitle>This is an article title</ArticleContentTitle>
          <ArticleContentDescription>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </ArticleContentDescription>
          <ArticleContentLink>Try it out →</ArticleContentLink>
        </ArticleContent>
      </Article>
      <Article>
        <ArticleContent>
          <ArticleContentDate>2022</ArticleContentDate>
          <ArticleContentTitle>This is an article title</ArticleContentTitle>
          <ArticleContentDescription>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </ArticleContentDescription>
          <ArticleContentLink>Try it out →</ArticleContentLink>
        </ArticleContent>
      </Article>
      <Article>
        <ArticleContent>
          <ArticleContentDate>2022</ArticleContentDate>
          <ArticleContentTitle>This is an article title</ArticleContentTitle>
          <ArticleContentDescription>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </ArticleContentDescription>
          <ArticleContentLink>Try it out →</ArticleContentLink>
        </ArticleContent>
      </Article>

      <AllArticlesLink>View all articles →</AllArticlesLink>
    </Container>
  )
}