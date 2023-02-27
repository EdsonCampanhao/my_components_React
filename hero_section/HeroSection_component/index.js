import './HeroSection.css'

const HeroSection = () => {

    return (
        <>
            <section className='hero-section'>
                <div>
                    <h1 className='text-gradiente'> Iasmin Amorin - A sua nutricionista </h1>
                    <p> Melhorando o seu <i>estilo de vida!</i></p> 
                    <div className='link-container'><div className='link-img'><a href='https://api.whatsapp.com/send/?phone=%2B5521987004539&text&type=phone_number&app_absent=0' className='link-txt'> agende sua consulta!!!</a></div></div>

                </div>
                <img src="../img/Iasmin_AmorinII.png" alt='Foto profissional' />
            </section>
        </>

    )

}

export default HeroSection