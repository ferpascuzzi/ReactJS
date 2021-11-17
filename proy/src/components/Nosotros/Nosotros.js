import React from 'react'
import '../HomeView/home.scss'

export const Nosotros = () => {
    return (
        <div className="container">

                <div className="mainHomeTitulo container col-lg-12 col-md-12 col-12">
                    <h1>Nuestra responsabilidad, cuidar la alimentación de tu mascota</h1>
                </div>

                <div className="container-fluid">
                    <div className="row">

                        <div className="col-lg-6 col-md-6"><img src="./Images/gatosperro3_.png" alt="nosotros2" width="100%"></img></div>
                            <div className="mainHomeParrafo col-lg-6 col-md-6 col-12">
                                <p>Las mascotas dependen de los humanos para satisfacer sus necesidades alimenticias. Una dieta debe ser equilibrada y adecuada para cada etapa de la vida del animal, así como también a su raza, tamaño y características. Una dieta balanceada
                                   está compuesta de agua, hidratos de carbono, proteínas, vitaminas, minerales y lípidos.</p>
                                <p>El método de procesamiento y la calidad de los ingredientes son los principales aspectos que definirán la calidad de un alimento.</p>
                            </div>

                            <div className="mainHomeParrafo col-lg-6 col-md-6 col-12">
                               <h1>Cómo elegir el alimento adecuado?</h1>
                               <p>La nutrición de nuestras mascotas tiene aspectos importantes a considerar antes de elegir un alimento. </p>

                                <h1>Qué clases de alimentos existen?</h1>
                                <p>Existen distintos tipos de alimentos: secos, semi húmedos y enlatados.</p>

                                <h1>Cómo saber si un alimento es bueno?</h1>
                                <p>Dentro de cada categoría, existen los alimentos Super Premium, Premium y Económicos. Cada uno está hecho con distintos ingredientes y cuanto mas premium significa mayor cantidad de ingredientes naturales.</p>

                            </div>

                            <div className="col-lg-6 col-md-6"><img src="./Images/perronapo3.png" alt="nosotros3" width="100%"></img></div>

                    </div>
                </div>

        </div>

    )
}
