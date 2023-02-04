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

import Placeholder from '../../assets/placeholder.svg';

export const Repositories = () => {
  return (
    <Container>
      <Title>Featured projects</Title>

      <Repository>
        <RepositoryContent>
          <RepositoryContentDate>2022</RepositoryContentDate>
          <RepositoryContentTitle>Project Name</RepositoryContentTitle>
          <RepositoryContentDescription>
            Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.
          </RepositoryContentDescription>
          <RepositoryContentLink>Try it out →</RepositoryContentLink>
        </RepositoryContent>
        <RepositoryImage src={Placeholder} alt='Project Placeholder' />
      </Repository>
      <Repository>
        <RepositoryContent>
          <RepositoryContentDate>2022</RepositoryContentDate>
          <RepositoryContentTitle>Project Name</RepositoryContentTitle>
          <RepositoryContentDescription>
            Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.
          </RepositoryContentDescription>
          <RepositoryContentLink>Try it out →</RepositoryContentLink>
        </RepositoryContent>
        <RepositoryImage src={Placeholder} alt='Project Placeholder' />
      </Repository>
      <Repository>
        <RepositoryContent>
          <RepositoryContentDate>2022</RepositoryContentDate>
          <RepositoryContentTitle>Project Name</RepositoryContentTitle>
          <RepositoryContentDescription>
            Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.
          </RepositoryContentDescription>
          <RepositoryContentLink>Try it out →</RepositoryContentLink>
        </RepositoryContent>
        <RepositoryImage src={Placeholder} alt='Project Placeholder' />
      </Repository>

      <AllProjectsLink>View all projects →</AllProjectsLink>
    </Container>
  )
}