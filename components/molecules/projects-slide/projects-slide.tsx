import {ProjectsSlideStyled} from "@molecules/projects-slide/projects-slide.styled";
import {Button} from "@atoms/button";
import {Wrapper} from "@atoms/wrapper/wrapper";

export function ProjectsSlide() {
    return (
        <>
            <ProjectsSlideStyled>
                <Wrapper>
                    <div>
                        <h3>TIENDITA</h3>
                        <p>¡Realiza la compra de tu despensa semanal de manera digital! Tiendita te ayuda a protegerte de los contagios y no extrañar ninguno de los productos del supermercado en tu hogar.</p>
                        <div className="buttons">
                            <Button>View</Button>
                            <Button>Live Demo</Button>
                        </div>
                    </div>
                </Wrapper>
            </ProjectsSlideStyled>
        </>
    )
}
