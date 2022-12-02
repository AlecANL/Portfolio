import { Heading } from '@atoms/heading'
import { CustomLink } from '@atoms/link'
import { Paragraph } from '@atoms/paragraph'
import { ICardProject } from '@models/project.interface'
import Image from 'next/image'
import { SweetProjectStyled } from './sweet-project.styled'

interface ISweetProjectProps {
  project: ICardProject
}

export function SweetProject(props: ISweetProjectProps) {
  const { project } = props ?? {}

  return (
    <>
      <SweetProjectStyled>
        <div className='main-content'>
          <Image src={project?.cover?.url} alt='hello world' width={368} height={240} />
          <Heading type='h3'>{project?.title}</Heading>
          <Paragraph>{project?.copy}</Paragraph>
        </div>
        <div className='buttons'>
          <CustomLink className='primary' url='https://google.com' isOpenNewTab>
            <span>Demo</span>
            <i className='icon-link'></i>
          </CustomLink>
          <CustomLink className='secondary' url={`/project/${project?.id}`}>
            <span>Read more</span>
            <i className='icon-arrow-left1'></i>
          </CustomLink>
        </div>
      </SweetProjectStyled>
    </>
  )
}
