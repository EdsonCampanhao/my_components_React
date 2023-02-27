import './Faq.css'

const Faq = () => {

const open=(event)=>{
    const classListOfAnswer=event.target.nextSibling.classList;
    const iconOfArrow= event.target.classList;

    classListOfAnswer.toggle('desabled');
    iconOfArrow.toggle('invert');

}


    return (
        <>
            <h2 className='faq__title'> Perguntas frequentes</h2>
            <div className="faq__cards">
                <article className="faq__info">
                    <h3 className="faq__titulo">Como se preparar para a consulta</h3>
                    <img src="../img/icon-faq.png" onClick={open} alt="" className="faq__icone" />
                    <p className="faq__resposta desabled">Anote todas as suas dúvidas caso esqueça na hora da consulta.
                        Deixe as
                        unhas livres de esmaltes e o rosto limpo, sem maquiagem para não interferir na análise. </p>
                </article>
                <article className="faq__info">
                    <h3 className="faq__titulo">Com que frequência devo ir ao Nutricionista?</h3>
                    <img src="../img/icon-faq.png" alt="seta de abertura da sanfona" onClick={open}  className="faq__icone" />
                    <p className="faq__resposta desabled">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                        exercitationem ullam totam distinctio nihil, itaque quisquam molestias maiores laboriosam,
                        perferendis atque. Cum quos minima tempore?</p>
                </article>
                <article className="faq__info">
                    <h3 className="faq__titulo">Preciso de encaminhamento para consulta?</h3>
                    <img src="../img/icon-faq.png" alt="seta de abertura da sanfona" onClick={open}  className="faq__icone" />
                    <p className="faq__resposta desabled">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
                        perspiciatis quos, incidunt praesentium minus ipsam expedita aut molestiae pariatur, iste
                        explicabo,
                        eveniet magni laboriosam rerum!</p>
                </article>
                <article className="faq__info">
                    <h3 className="faq__titulo">O que um Nutricionista faz em uma consulta?</h3>
                    <img src="../img/icon-faq.png" alt="seta de abertura da sanfona" onClick={open}  className="faq__icone" />
                    <p className="faq__resposta desabled">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                        deserunt dicta culpa fuga sint eaque praesentium dolore aspernatur odit tenetur laudantium
                        aliquam
                        cupiditate, et quidem.</p>
                </article>
                <article className="faq__info">
                    <h3 className="faq__titulo">O que devo esperar de uma análise de Rotina?</h3>
                    <img src="../img/icon-faq.png" alt="seta de abertura da sanfona" onClick={open}  className="faq__icone" />
                    <p className="faq__resposta desabled">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
                        eum
                        expedita, eaque qui rem adipisci assumenda error veniam quos. Blanditiis hic numquam distinctio
                        ipsam dolorem.</p>
                </article>
            </div>
        </>
    )
}

export default Faq