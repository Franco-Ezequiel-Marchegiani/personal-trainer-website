import logo from '../../logo.svg';

function Home(){

    return(
        <section>
            <header className='header'>
                <div className='headerContainer'>
                    <img src="" alt="" className='logo'/>
                    <div className='buttonHeaderContainer'>
                        <button>Registrate</button>
                        <button>Iniciar Sesión</button>
                    </div>
                </div>
                <div className='textHeaderContainer'>
                    <h1>Rutinas por Objetivos</h1>
                    <p>Ya has creado un hábito de entrenamiento, ¡conviértelo en tu estilo de vida!</p>
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