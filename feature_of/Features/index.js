import './Features.css'

const Features = () => {
    return (
        <section className='features'>

            <h2> O meu objetivo é tornar a sua jornada mais 'tranquila' com: </h2>
            <div className='container'>
                <article>
                    <img src='../img/chatGiff.gif' />
                    <div>
                        <h3>
                            Acompanhamento períodico
                        </h3>
                        <p> Além da consulta você terá um excelente pós serviço, pois você terá até 3 mini consultas de 15 minutos durante a semana seguinte</p>
                    </div>
                </article>
                <article>
                    <img src='../img/list.gif' />
                    <div>
                        <h3>
                            Lista to do
                        </h3>
                        <p> Lista com pequenos objetivos que se adequam aos seus objetivos para medir seu desempenho e conquistas</p>
                    </div>
                </article>
                <article>
                    <img src='../img/receitas.png' />
                    <div>
                        <h3>
                            Receitas saudáveis e deliciosas
                        </h3>
                        <p> Mais que uma dieta as receitas serão pensadas nos seus objetivos e rotina para tornar sua caminhada menos desgastante e mais recompensadora</p>
                    </div>
                </article>

            </div>
        </section >
    )
}
export default Features