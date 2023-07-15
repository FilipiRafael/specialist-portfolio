import {
  Container,
  Wrapper,
  Title,
  Description,
  Avatar,
  AboutLink,
} from "./style";

import { Navbar } from "../../Components/Navbar";
import { Contact } from "../../Components/Contact";

import AboutPicture from "../../assets/aboutpicture.svg";

export const About = () => {
  return (
    <Container>
      <Navbar actualPage="About" />

      <Wrapper>
        <Avatar src={AboutPicture} />
        <Title>About</Title>
        <Description>
          Hello! I'm Filipi, a passionate Full-Stack Engineer dedicated to
          solving problems and creating impactful products. As a developer, I
          seek to help my team to become more effective and less experienced
          developers to grow/learn more. Currently working at BuiltGrid, I have
          the privilege of developing innovative solutions that transform the
          construction market in Australia.
        </Description>
        <Description>
          With expertise in JavaScript/TypeScript, I build web and mobile
          applications using React and React Native. I strive to create
          beautiful, user-friendly interfaces that provide real solutions.
          Additionally, I excel in developing RESTful APIs using NodeJS, Prisma,
          and various NoSQL and SQL solutions.
        </Description>
        <Description>
          I love challenging myself with side projects, some of which you can
          find on my website (filipirafael.com). I also share my knowledge and
          insights through articles on my Medium profile (https://medium.com/
          @filipirafael.123).
        </Description>
        <Description>
          Driven by continuous growth, I study English daily with native
          teachers to enhance my communication skills. Having gained
          international experience as a front-end developer, I'm eager to
          explore opportunities that allow me to make a global impact.
        </Description>
        <AboutLink
          href="https://drive.google.com/file/d/1HmaCIcHO-TZlnsm3uGmavS0n-77K5HH8/view?usp=share_link"
          target="_blank"
        >
          View CV ↗︎
        </AboutLink>
        <Contact />
      </Wrapper>
    </Container>
  );
};
