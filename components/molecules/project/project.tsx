import { Heading } from '@atoms/heading'
import { ProjectImageStyled, ProjectStyled } from './project.styled'

export function Project() {
  return (
    <>
      <ProjectStyled>
        <ProjectImageStyled />
        <Heading type='h4'>test</Heading>
      </ProjectStyled>
    </>
  )
}
