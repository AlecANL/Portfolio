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
import { SweetProject } from '@molecules/sweet-project'

import en from '@i18n/common/common-en.json'
import es from '@i18n/common/common-es.json'
import { useLanguage } from '../hooks/useLanguage'
import { Heading } from '@atoms/heading'

function Projects() {
  const { currentLanguage } = useLanguage(en, es)
  return (
    <MainProjectsContainer>
      <Wrapper>
        <Heading type='h1'>{currentLanguage['subtitle:projects']}</Heading>
        <ProjectsContentStyled>
          {listProjectsJson.map(project => (
            <SweetProject key={project?.id} project={project} />
          ))}
        </ProjectsContentStyled>
        <Footer />
      </Wrapper>
    </MainProjectsContainer>
  )
}

export default Projects
