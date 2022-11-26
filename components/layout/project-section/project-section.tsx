import React from 'react'

import { Heading } from '@atoms/heading'
import { CardProject } from '@molecules/card-project/card-project'

import { ProjectSectionCardsContainer, ProjectSectionStyled } from './project-section.styled'

import { useLanguage } from '@hooks/useLanguage'

import en from '@i18n/common/common-en.json'
import es from '@i18n/common/common-es.json'

import { ICardProject, ICardProjectProps } from '@models/project.interface'

interface IProjectSectionProps {
  projects: ICardProject[]
  children?: React.ReactNode
}

export function ProjectSection(props: IProjectSectionProps) {
  const { projects } = props ?? {}

  const { currentLanguage } = useLanguage(en, es)

  return (
    <>
      <ProjectSectionStyled>
        <Heading type='h2'>{currentLanguage['title:projects']}</Heading>

        <ProjectSectionCardsContainer>
          {projects.map(project => (
            <CardProject key={project.id} project={project} isShowCount />
          ))}
        </ProjectSectionCardsContainer>
      </ProjectSectionStyled>
    </>
  )
}
