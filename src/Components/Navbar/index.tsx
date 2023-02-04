import { Container, MenuItem, Wrapper } from "./style"

export const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <MenuItem
          isActive={true}
          onClick={() => {}}
        >
          Filipi Rafael
        </MenuItem>
        <MenuItem
          isActive={false}
          onClick={() => {}}
        >
          Projects
        </MenuItem>
        <MenuItem
          isActive={false}
          onClick={() => {}}
        >
          Articles
        </MenuItem>
        <MenuItem
          isActive={false}
          onClick={() => {}}
        >
          About ✨
        </MenuItem>
      </Wrapper>
    </Container>
  )
}