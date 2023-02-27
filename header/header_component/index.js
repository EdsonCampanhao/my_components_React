import './Header.css'
import './MenuIcon.css'

const Header = () => {

    const openMenu = (event) => {

        const container = document.querySelector('.lista');

        if (event.target.attributes.length > 1) {
            event.target.nextSibling.classList.toggle('desabled')
            event.target.classList.toggle('on')
            container.classList.toggle('on')
        } else {
            event.target.parentNode.nextSibling.classList.toggle('desabled');
            event.target.parentNode.classList.toggle('on');
            container.classList.toggle('on')
        }



    }



    return (
        <section className='header'>
            <div className="lista">

                <div className="menu">

                    <div className='menu-hamburguer' data-menu='2' onClick={openMenu}>
                        <div >
                        </div>
                        <div>
                        </div>
                        <div ></div>
                    </div>

                    <ul className="lista__lista desabled">
                        <li>início</li>
                        <li>serviço</li>
                        <li>sobre</li>
                        <li>contato</li>
                    </ul>
                </div>

            </div>

        </section >
    )
};

export default Header;