import { Copy } from '@molecules/hero-copy'
import { HeroImage } from '@molecules/hero-image'
import { Wrapper } from '@atoms/wrapper/wrapper'
import { HeroStyled } from './hero.styled'

export function Hero() {
  return (
    <>
      <Wrapper>
        <HeroStyled>
          <Copy />
          <HeroImage />
        </HeroStyled>
      </Wrapper>
    </>
  )
}
