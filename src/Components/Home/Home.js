import logo from '../../logo.svg';
import './Home.css';
import Logo from '../../Images/icon.png'
function Home(){

    return(
        <section className='cointainerAll'>
            <header className='header'>
                <div className='headerContainer'>
                    <img src={Logo} alt="Logo website" className='logo'/>
                    <div className='buttonHeaderContainer'>
                        <button>Registrate</button>
                        <button>Iniciar Sesión</button>
                    </div>
                </div>
                <div className='textHeaderContainer'>
                    <h1>Rutinas por Objetivos</h1>
                    <p>Ya has creado un hábito de entrenamiento, <span className='rowBreake'>¡conviértelo en tu estilo de vida!</span></p>
                </div>
            </header>
            <main>
                <p className='titleSection'>Entrenamientos del día</p>
                {/* Acá van el componente hijo con la info de una API para que sea escalable */}
            </main>
            <section>
                <p>Tipos de Entrenamiento</p>
                {/* Acá va */}
            </section>
        </section>
    )
}

export default Home;