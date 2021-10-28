import React from 'react'
import './home.scss'

export const Home = () => {
    return (

    <div className="container">

        <div className="container-fluid">  

            <div className="row"> 

                <div className="mainHomeTitulo col-lg-12 col-md-12 col-12">
                    <h1>Tu mascota nos importa</h1>
                    <p>En MascoLand Store sabemos lo importante que es tu mascota, por eso queremos ayudarlos a alimentarse de la manera mas saludable</p>
                    <img src="./Images/gatosperro1 bw.jpg" alt="home0" width="100%"></img>
                </div>

                <div className="mainHomeParrafo col-lg-6 col-md-6 col-12">
                    <h1>Nuestra prioridad desde el primer momento</h1>
                    <p>Desde cachorros debemos ocuparnos de su alimentación para asegurarnos que crezcan fuertes y sanos</p>
                </div>

                <div className="col-lg-6 col-md-6 d-none d-sm-none d-md-block">
                    <img src="./Images/gatosperro5 bw.jpg" alt="home1" width="100%"></img> 
                </div>

                <div className="col-lg-6 col-md-6 d-none d-sm-none d-md-block">
                    <img src="./Images/gato4 bw.jpg" alt="home2" width="100%"></img>
                </div>
        
                <div className="mainHomeParrafo col-lg-6 col-md-6 col-12">
                    <h1>Acompañamos su desarrollo</h1>
                    <p>Cada animal tiene distintas características dependiendo de su raza, tamaño y contextura. Elegí el alimento que mas se ajuste a sus necesidades</p>
                </div>

                <div className="mainHomeParrafo col-lg-6 col-md-6 col-12">
                    <h1>Alimentos específicos</h1>
                    <p>Existe una variedad de alimentos especiales para animales con alergias, estómagos sensibles, problemas cutáneos, debilidad ósea o muscular, o incluso adultos con patologías propias a su edad</p>
                </div>

                <div className="col-lg-6 col-md-6 d-none d-sm-none d-md-block">
                    <img src="./Images/perro7 bw.jpg" alt="home3" width="100%"></img>
                </div>

            </div> 
        </div>
        <br/>
    </div>
        )
    }
    