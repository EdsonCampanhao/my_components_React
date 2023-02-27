import './Footer.css'

const Footer = () => {
    return (
        <section className="rodape">

            <div className='container'>
                <div className="rodape__info">

                    <div className='contatos'>
                        <h3>CONTATO</h3>
                        <p>+55 21 9999-9999</p>
                        <p>contato@dermato.com.br</p>
                    </div>

                    <div>
                        <p >Rua São Paulo, 45 - Americana</p>
                        <p >Americana - SP</p>
                    </div>

                </div>
                <div className="links">
                   
                </div>
                <div className="contato__redes_sociais">
                    <a href='https://wa.me/+5521987004539'><img src="../img/wpp-icon.png" alt="" /></a> 
                    <a href='https://www.instagram.com/iasmyn.amoriim/?igshid=MDM4ZDc5MmU%3D'> <img src="../img/ig.png" alt="" /></a>
                    <img src="../img/face.png" alt="" />
                   
                </div>



            </div>
        </section>
    )
}

export default Footer