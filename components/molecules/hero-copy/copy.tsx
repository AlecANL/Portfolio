import { CopyStyled } from './copy.styled'
import { Heading } from '@atoms/heading/heading'

import commonEn from '@i18n/common/common-en.json'
import commonEs from '@i18n/common/common-es.json'
import { useLanguage } from '../../../hooks/useLanguage'

export function Copy() {
  const { currentLanguage: currentTranslation } = useLanguage(commonEn, commonEs)

  return (
    <>
      <CopyStyled>
        <Heading type='h4'> {currentTranslation['copy:hello_world']} </Heading>
        <Heading type='h3'> {currentTranslation['copy:name']} </Heading>
        <Heading type='h1'> {currentTranslation['copy:position']} </Heading>
      </CopyStyled>
    </>
  )
}
