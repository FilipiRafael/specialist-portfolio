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
        Now go back to the app to start turning goals into actions.
      </Description>

      <Logo src={BeReadyLogo} alt='BeReady Logo' />

      <Button>
        Take Action on My Goals
      </Button>
    </Container>
  )
};