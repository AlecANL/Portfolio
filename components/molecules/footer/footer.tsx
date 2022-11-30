import socialMediaLinks from '@data/social-media-links.json'
import { CustomLink } from '@atoms/link'
import { FooterStyled, FooterStyledIcons } from '@molecules/footer/footer.styled'
import { Wrapper } from '@atoms/wrapper/wrapper'

export function Footer() {
  return (
    <>
      <Wrapper>
        <FooterStyled>
          {socialMediaLinks.map(link => (
            <CustomLink key={link.id} url={link.url} isOpenNewTab>
              <FooterStyledIcons width={24} height={24} src={link?.icon} alt={`${link?.name}`} />
              <span>{link?.name ?? 'undefined'}</span>
            </CustomLink>
          ))}
        </FooterStyled>
      </Wrapper>
    </>
  )
}
