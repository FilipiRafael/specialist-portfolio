import {
  Container,
  Logo,
  Title,
  Description,
  Button
} from './style';

import BeReadyLogo from '../../assets/beready.svg';

export const BeReady = () => {
  return (
    <Container>
      <Title>All right! 🥳</Title>
      <Description>
        Now <strong>go back to the app</strong> to start turning goals into actions.
      </Description>

      <Logo src={BeReadyLogo} alt='BeReady Logo' />

      <Button href='https://auth.expo.io/@filipi.rafael/beready'>
        Take Action on My Goals
      </Button>
    </Container>
  )
};