import { Link } from "react-router-dom";
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
} from "./style";

interface RepositoriesProps {
  learnMoreLink?: string;
  learnMoreText: string;
  actualPage: string;
}

export const Repositories = ({ learnMoreLink, learnMoreText, actualPage }: RepositoriesProps) => {
  return (
    <Container>
      {actualPage === 'Filipi Rafael' && <Title>Featured projects</Title>}

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
                target='_blank'
              >
                Try it out →
              </RepositoryContentLink>
            </RepositoryContent>
            <RepositoryImage src={repository.image} alt='Project Placeholder' />
          </Repository>
        ))
      }

      {
        learnMoreLink ?
          <AllProjectsLink
            href={learnMoreLink}
            target='_blank'
          >
            {learnMoreText}
          </AllProjectsLink> :
          <Link
            style={{ textDecoration: 'none', marginTop: '3rem' }}
            to='/projects'
          >
            <AllProjectsLink target='_blank'>
              {learnMoreText}
            </AllProjectsLink>
          </Link>
      }
    </Container>
  )
}