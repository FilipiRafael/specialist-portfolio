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
        <SocialLink
          href='https://www.linkedin.com/in/filipi-rafael-developer/'
          target='_blank'
        >
          Linkedin ↗︎
        </SocialLink>
        <SocialLink
          href='https://github.com/FilipiRafael'
          target='_blank'
        >
          Github ↗︎
        </SocialLink>
        <SocialLink
          href='https://www.youtube.com/channel/UC_ac-cJ2QJicAg31hBDOH5Q'
          target='_blank'
        >
          Youtube ↗︎
        </SocialLink>
        <SocialLink
          href='https://www.instagram.com/filipi.rafael.7/'
          target='_blank'
        >
          Instagram ↗︎
        </SocialLink>
      </Wrapper>
    </Container>
  )
}