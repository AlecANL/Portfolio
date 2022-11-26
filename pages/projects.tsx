import Image from 'next/image'
import { Wrapper } from '@atoms/wrapper/wrapper'
import { Footer } from '@molecules/footer'
import { Search } from '@molecules/search'
import { ProjectsSlide } from '@molecules/projects-slide'
import { MainProjectsContainer } from '../styles/globals'

import listProjectsJson from '@data/list-projects.json'
import { CardProject } from '@molecules/card-project'
import { ICardProjectProps } from '@models/project.interface'
import { ProjectsContentStyled } from 'styles/projects.styled'

function Projects() {
  return (
    <MainProjectsContainer>
      <ProjectsSlide />
      <Wrapper>
        <Search />
        <ProjectsContentStyled>
          {listProjectsJson.map(project => (
            <CardProject key={project.id} project={project} />
          ))}
        </ProjectsContentStyled>
        <Footer />
      </Wrapper>
    </MainProjectsContainer>
  )
}

export default Projects
