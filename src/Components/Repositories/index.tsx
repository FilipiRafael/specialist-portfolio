import { repositories } from "../../mocks/repositories";
import {
  Container,
  Title,
  Repository,
  RepositoryContent,
  RepositoryImage,
  RepositoryContentDate,
  RepositoryContentTitle,
  RepositoryContentDescription,
  RepositoryContentLink,
  AllProjectsLink
} from "./style"

export const Repositories = () => {
  return (
    <Container>
      <Title>Featured projects</Title>

      {
        repositories.map((repository) => (
          <Repository key={repository.id}>
            <RepositoryContent>
              <RepositoryContentDate>{repository.date}</RepositoryContentDate>
              <RepositoryContentTitle>{repository.title}</RepositoryContentTitle>
              <RepositoryContentDescription>
                {repository.description}
              </RepositoryContentDescription>
              <RepositoryContentLink
                href={repository.link}
              >
                Try it out →
              </RepositoryContentLink>
            </RepositoryContent>
            <RepositoryImage src={repository.image} alt='Project Placeholder' />
          </Repository>
        ))
      }

      <AllProjectsLink>View all projects →</AllProjectsLink>
    </Container>
  )
}