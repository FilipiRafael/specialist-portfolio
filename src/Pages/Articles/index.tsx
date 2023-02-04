import {
  Container,
  Wrapper,
  Title
} from "./style"

import { Navbar } from "../../Components/Navbar"
import { Articles } from "../../Components/Articles"
import { Contact } from "../../Components/Contact"

export const ArticlesPage = () => {
  return (
    <Container>
      <Navbar actualPage='Articles' />

      <Wrapper>
        <Title>Articles</Title>

        <Articles
          actualPage='Articles'
          learnMoreLink='https://medium.com/@filipirafael.123'
          learnMoreText='View archived articles →'
        />

        <Contact />
      </Wrapper>
    </Container>
  )
}