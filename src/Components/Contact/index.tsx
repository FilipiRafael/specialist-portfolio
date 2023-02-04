import {
  Container,
  Title,
  Wrapper,
  SocialLink
} from './style';

export const Contact = () => {
  return (
    <Container>
      <Wrapper isSpaceBetween={true}>
        <Title>Follow me</Title>
        <Title>I 😍 feedbacks.</Title>
      </Wrapper>

      <Wrapper isSpaceBetween={false}>
        <SocialLink>Linkedin ↗︎</SocialLink>
        <SocialLink>Github ↗︎</SocialLink>
        <SocialLink>Youtube ↗︎</SocialLink>
        <SocialLink>Instagram ↗︎</SocialLink>
      </Wrapper>
    </Container>
  )
}