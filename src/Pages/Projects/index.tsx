import {
  Container,
  Wrapper,
  Title
} from "./style"

import { Navbar } from "../../Components/Navbar"
import { Repositories } from "../../Components/Repositories"
import { Contact } from "../../Components/Contact"

export const Projects = () => {
  return (
    <Container>
      <Navbar actualPage='Projects' />

      <Wrapper>
        <Title>Projects</Title>

        <Repositories
          actualPage='Projects'
          learnMoreLink='https://github.com/filipirafael'
          learnMoreText='View archived projects →'
        />

        <Contact />
      </Wrapper>
    </Container>
  )
}