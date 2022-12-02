import { Wrapper } from '@atoms/wrapper/wrapper'
import projectsJson from '@data/projects.json'
import { CardProject } from '@molecules/card-project'
import { ProjectStyledContainer } from 'styles/project.styled'

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

export default function ProjectDescription({ project }: any) {
  return (
    <ProjectStyledContainer>
      <Wrapper>
        <CardProject project={project} />
      </Wrapper>
    </ProjectStyledContainer>
  )
}
