import './ProgressBar.css'

const ProgressBar = () => {
    return (
        <section className='progress-bar'>
            <h2>
                O processo será composto por:
            </h2>
            <div className='container'>
                <article className='progress-bar__card'>
                    <div >
                        <p className='progress-bar__number'>1</p>
                        <div className='divisor'></div>
                    </div>
                    <h3> Consulta presencial ou online </h3>
                    <p> Aqui avaliarei seus objetivos e possibilidades para montar a melhor estrategia</p>
                </article>

                <article className='progress-bar__card'>
                    <div >
                        <p className='progress-bar__number'>2</p>
                        <div className='divisor'></div>
                    </div>
                    <h3> Conteúdo diário </h3>
                    <p> As receitas para te ajudar nesse trajeto serão enviadas diariamente pelo wpp</p>
                </article>


                <article className='progress-bar__card'>
                    <div >
                        <p className='progress-bar__number'>3</p>
                        <div className='divisor'></div>
                    </div>
                    <h3> Sondagem dos objetivos</h3>
                    <p> Aqui será feita uma nova consulta para a sondagem dos objetivos,
                        será feita uma troca de abordagem caso necessário</p>
                </article>

            </div>

        </section>
    )
}
export default ProgressBar