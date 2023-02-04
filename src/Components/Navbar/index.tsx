import { Container, MenuItem, Wrapper } from "./style"
import { useNavigate } from 'react-router-dom';

interface NavBarProps {
  actualPage: string;
}

export const Navbar = ({ actualPage }: NavBarProps) => {

  const navigate = useNavigate();

  return (
    <Container>
      <Wrapper>
        <MenuItem
          isActive={actualPage === 'Filipi Rafael' ? true : false}
          onClick={() => navigate('/')}
        >
          Filipi Rafael
        </MenuItem>
        <MenuItem
          isActive={actualPage === 'Projects' ? true : false}
          onClick={() => navigate('/projects')}
        >
          Projects
        </MenuItem>
        <MenuItem
          isActive={actualPage === 'Articles' ? true : false}
          onClick={() => navigate('/articles')}
        >
          Articles
        </MenuItem>
        <MenuItem
          isActive={actualPage === 'About' ? true : false}
          onClick={() => navigate('/about')}
        >
          About ✨
        </MenuItem>
      </Wrapper>
    </Container>
  )
}