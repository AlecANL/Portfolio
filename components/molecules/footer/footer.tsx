import socialMediaLinks from '@data/social-media-links.json';
import {CustomLink} from "@atoms/link";
import {FooterStyled, FooterStyledIcons} from "@molecules/footer/footer.styled";


export function Footer() {
    return (
        <>
            <FooterStyled>
                {
                    socialMediaLinks.map(link => (
                        <CustomLink key={link.id} url={link.url}>
                            <FooterStyledIcons width={24} height={24} src={link?.icon} alt={`${link?.name}`}/>
                            <span>{ link?.name ?? 'undefined' }</span>
                        </CustomLink>
                    ))
                }
            </FooterStyled>
        </>
    )
}
