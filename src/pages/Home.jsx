import { ButtonConteiner, CardContainer, IconConteiner, ResultConteiner} from "./Home.styles";

import iconStarImg from "../assets/icon-star.svg"
import thankYouImg from "../assets/illustration-thank-you.svg"
import { useState } from "react";

export function Home() {
  const [mostrarResultado, setMostrarResutado] = useState(false)
  const [feedbackNote, setfeedbackNote] = useState(0)
  
  function handleFeedbackButtonClick(event) {
    const feedback = Number(event.target.innerText) 

    setfeedbackNote(feedback)
  }

  function handleSubmit() {
    if (feedbackNote === 0) return

    setMostrarResutado(true)
  }
  return (
    mostrarResultado === false ? (
      <CardContainer>
        <IconConteiner>
          <img src={iconStarImg} alt="ícone de estrela" />  
        </IconConteiner>

        <h1>Como foi o atendimento?</h1>
        <p>Conte-nos como foi nossa ajuda com sua solicitação. Agradecemos muito seu feedback para podermos melhorar nosso atendimento!</p>

        <ButtonConteiner> 

          <button onClick={handleFeedbackButtonClick}>1</button>
          <button onClick={handleFeedbackButtonClick}>2</button>
          <button onClick={handleFeedbackButtonClick}>3</button>
          <button onClick={handleFeedbackButtonClick}>4</button>
          <button onClick={handleFeedbackButtonClick}>5</button>

        </ButtonConteiner>

        <button onClick={handleSubmit}>Enviar</button>
      </CardContainer>
    ) : (
      <CardContainer>
        <img src={thankYouImg} alt="imagem de agradecimento" />

        <ResultConteiner>
          <p>Você selecionou {feedbackNote} de 5</p>
        </ResultConteiner>

        <h1>Obrigado!</h1>

        <p>Agradecemos por dedicar um momento para nos avaliar. Se precisar de mais suporte, não hesite em entrar em contato! </p>
      </CardContainer>
    )
  )
}
