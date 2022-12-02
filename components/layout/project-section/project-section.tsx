import React from 'react'

import { Heading } from '@atoms/heading'
import { CardProject } from '@molecules/card-project/card-project'

import { ProjectSectionCardsContainer, ProjectSectionStyled } from './project-section.styled'

import { useLanguage } from '@hooks/useLanguage'

import en from '@i18n/common/common-en.json'
import es from '@i18n/common/common-es.json'

import { ICardProject, ICardProjectProps } from '@models/project.interface'
import { CustomLink } from '@atoms/link'

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
            <CardProject key={project.id} project={project} isShowCount isShowPattern isShowStack />
          ))}
        </ProjectSectionCardsContainer>
        <div className='link'>
          <CustomLink url='/projects'>
            <span>View all projects</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              x='0px'
              y='0px'
              viewBox='0 0 80 80'
              xmlSpace='preserve'
            >
              <g fill='none' strokeWidth='1.5'>
                <path transform='translate(5,14)' d='M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98'></path>
              </g>

              <circle
                transform='rotate(-90 40 40)'
                className='another-circle'
                cx='50'
                cy='20'
                r='15.12'
                fill='transparent'
                strokeWidth='1.9'
              />
            </svg>
          </CustomLink>
        </div>
      </ProjectSectionStyled>
    </>
  )
}
