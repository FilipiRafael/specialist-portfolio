import {
  Container,
  Wrapper,
  Profile,
  Avatar,
  Title,
  Description,
  ProfileLink,
} from './style';

import { Navbar } from '../../Components/Navbar';
import { Repositories } from '../../Components/Repositories';
import { Articles } from '../../Components/Articles';
import { Contact } from '../../Components/Contact';

import AvatarImage from '../../assets/memoji.svg';

import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <Container>
      <Navbar actualPage='Filipi Rafael' />
      
      <Wrapper>
        <Profile>
          <Avatar src={AvatarImage} alt='Avatar Profile' />

          <Title>I craft interfaces</Title>
          <Description>
            A Full-Stack Engineer that loves apply his knowledge to solve problems, create amazing products and impact lives. As a developer I seek to help my team to become more effective and less experienced developers to grow/learn more.
          </Description>
          <Link
            style={{ textDecoration: 'none' }}
            to='/about'
          >
            <ProfileLink>Learn more →</ProfileLink>
          </Link>
        </Profile>

        <Link
          style={{ textDecoration: 'none' }}
          to='/projects'
        >
          <Repositories actualPage='Filipi Rafael' learnMoreText='View all projects →' />
        </Link>
        
        <Link
          style={{ textDecoration: 'none' }}
          to='/articles'
        >
          <Articles actualPage='Filipi Rafael' learnMoreText='View all articles →' />
        </Link>
        <Contact />
      </Wrapper>
    </Container>
  )
}