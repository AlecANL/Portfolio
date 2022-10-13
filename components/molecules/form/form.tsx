import { FormGroup, FormStyled } from './form.styled'

import en from '@i18n/common/common-en.json'
import es from '@i18n/common/common-es.json'
import { useLanguage } from '@hooks/useLanguage'
import { Button } from '@atoms/button'

export function Form() {
  const { currentLanguage } = useLanguage(en, es)

  return (
    <FormStyled>
      <FormGroup>
        <label htmlFor='name'> {currentLanguage['label:name']} </label>
        <input placeholder={currentLanguage['label:name']} type='text' name='name' id='name' />
      </FormGroup>
      <FormGroup>
        <label htmlFor='name'> {currentLanguage['label:email']} </label>
        <input placeholder={currentLanguage['label:email']} type='text' name='name' id='name' />
      </FormGroup>
      <FormGroup>
        <label htmlFor='name'> {currentLanguage['label:comment']} </label>
        <textarea placeholder={currentLanguage['label:comment']} name='comment' id='comment'></textarea>
      </FormGroup>
      <Button>{currentLanguage['send']}</Button>
    </FormStyled>
  )
}
