import { Heading } from '@atoms/heading'
import { CustomLink } from '@atoms/link'
import { Paragraph } from '@atoms/paragraph'
import { ICardProject } from '@models/project.interface'
import Image from 'next/image'
import { SweetProjectStyled } from './sweet-project.styled'

import en from '@i18n/common/common-en.json'
import es from '@i18n/common/common-es.json'
import { useLanguage } from '../../../hooks/useLanguage'

interface ISweetProjectProps {
  project: ICardProject
}

export function SweetProject(props: ISweetProjectProps) {
  const { project } = props ?? {}

  const { currentLanguage } = useLanguage(en, es)

  return (
    <>
      <SweetProjectStyled>
        <div className='main-content'>
          <Image src={project?.cover?.url} alt='hello world' width={368} height={240} />
          <Heading type='h3'>{project?.title}</Heading>
          <Paragraph>{project?.copy}</Paragraph>
        </div>
        <div className='buttons'>
          <CustomLink className='primary' url={project.demo} isOpenNewTab>
            <span>{currentLanguage['label:demo']}</span>
            <i className='icon-link'></i>
          </CustomLink>
          <CustomLink className='secondary' url={project.repository} isOpenNewTab>
            <span>{currentLanguage['link:code']}</span>
            <i className='icon-arrow-left1'></i>
          </CustomLink>
        </div>
      </SweetProjectStyled>
    </>
  )
}
