import { ButtonConteiner, CardContainer, IconConteiner } from "./Home.styles";

import iconStarImg from "../assets/icon-star.svg"

export function Home() {
  return (
    <CardContainer>
      <IconConteiner>
        <img src={iconStarImg} alt="ícone de estrela" />  
      </IconConteiner>

      <h1>Como foi o atendimento?</h1>
      <p>Conte-nos como foi nossa ajuda com sua solicitação. Agradecemos muito seu feedback para podermos melhorar nosso atendimento!</p>

      <ButtonConteiner> 

        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>

      </ButtonConteiner>

      <button>Enviar</button>
    </CardContainer>
  )
}
