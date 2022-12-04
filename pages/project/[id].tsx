import { TechTag } from '@atoms/tech-tag'
import { Wrapper } from '@atoms/wrapper/wrapper'
import projectsJson from '@data/projects.json'
import { ICardProject } from '@models/project.interface'
import { CardProject } from '@molecules/card-project'
import { ProjectContent, ProjectDetail, ProjectRequirementContent, ProjectStackStyled, ProjectStyledContainer } from 'styles/project.styled'
import { Paragraph } from '@atoms/paragraph/paragraph'
import { Heading } from '@atoms/heading/heading'
import { CustomLink } from '@atoms/link'

export async function getServerSideProps(context) {
  const { id } = context.params ?? {}

  const project = projectsJson.find(project => project.id === id)

  if (!project) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    }
  }

  return {
    props: {
      project,
    },
  }
}

export interface IProjectProps {
  project: ICardProject
}

export default function ProjectDescription({ project }: IProjectProps) {
  return (
    <ProjectStyledContainer>
      <Wrapper>
        <CustomLink className="bak-btn" url='/projects'>
          <i className='icon-arrow-left3'></i>
          <span>Back</span>
        </CustomLink>
        <CardProject project={project} />
        <ProjectContent className='content'>
          <ProjectStackStyled>
            {project.details.stack.map(tag => (
              <TechTag key={tag.id} {...tag} />
            ))}
          </ProjectStackStyled>
          <ProjectDetail>
            <Heading type='h4'>Project Detail</Heading>
            {project.details.detail.map((detail, idx) => (
              <Paragraph key={idx}> {detail} </Paragraph>
            ))}
          </ProjectDetail>
          <ProjectRequirementContent>
            <Heading type='h4'>Requirements</Heading>
            <ul>
              {project.details.requirements.map((requirement, idx) => (
                <li key={idx}> {requirement} </li>
              ))}
            </ul>
          </ProjectRequirementContent>
        </ProjectContent>
      </Wrapper>
    </ProjectStyledContainer>
  )
}
