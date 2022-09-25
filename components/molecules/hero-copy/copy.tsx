import { Heading } from '@atoms/heading/heading'
import { Paragraph } from '@atoms/paragraph'
import { Button } from '@atoms/button'

import { useLanguage } from '@hooks/useLanguage'

import { CopyStyled } from './copy.styled'

import commonEn from '@i18n/common/common-en.json'
import commonEs from '@i18n/common/common-es.json'

export function Copy() {
  const { currentLanguage: currentTranslation } = useLanguage(commonEn, commonEs)

  return (
    <>
      <CopyStyled>
        <Heading type='h4'> {currentTranslation['copy:hello_world']} </Heading>
        <Heading className='name' type='h3'>
          {currentTranslation['copy:name']}
        </Heading>
        <Heading className='position' type='h1'>
          {currentTranslation['copy:position']}
        </Heading>
        <Paragraph>{currentTranslation['copy:about']}</Paragraph>
        <Button>{currentTranslation['downloadPDf']}</Button>
      </CopyStyled>
    </>
  )
}
