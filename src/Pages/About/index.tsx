import {
  Container,
  Wrapper,
  Title,
  Description,
  Avatar,
  AboutLink
} from "./style"

import { Navbar } from "../../Components/Navbar";
import { Contact } from "../../Components/Contact";

import AboutPicture from '../../assets/aboutpicture.svg';

export const About = () => {
  return (
    <Container>
      <Navbar actualPage='About' />

      <Wrapper>

        <Avatar
          src={AboutPicture}
        />

        <Title>About</Title>

        <Description>
          A Full-Stack Engineer that loves apply his knowledge to solve problems, create amazing products and impact lives. As a developer I seek to help my team to become more effective and less experienced developers to grow/learn more.
        </Description>

        <Description>
          I currently work at BuiltGrid, where I have the privilege of develop products that have impacts on millions of Australians, transforming how construction market works.
        </Description>

        <Description>
          I develop solutions and ideas using my creativity and my technical knowledge in Javascript/Typescript building web-apps with React and mobile-apps using React Native and that aren't just beautiful, but enjoyable to use and really problem solvers. Also, I develop RESTful APIs using NodeJS, Prisma and other NoSQL and SQL solutions.
        </Description>

        <Description>
          Studying English every day with native teachers to improve my communication skills and I have international experience as a front-end developer.
        </Description>

        <AboutLink
          href='https://drive.google.com/file/d/14pEP6e8h9JuB9DunLBrL8IqVFM8bNKtr/view?usp=sharing'
          target='_blank'
        >
          View CV ↗︎
        </AboutLink>

        <Contact />
      </Wrapper>
    </Container>
  )
}