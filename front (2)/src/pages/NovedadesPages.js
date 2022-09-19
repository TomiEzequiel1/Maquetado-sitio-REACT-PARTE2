import '../styles/components/pages/Novedadespage.css'
import React from "react";
const NovedadesPage = (props) => {
    return (
        <section className="holder">
            <h2> Novedades </h2>
            <div className='novedades'>
             <h3> Samsung Galaxy Buds2 Pro y Galaxy Watch5: todos los detalles técnicos</h3>
             <h4> Qué hardware y nuevas funciones traen los auriculares inalámbricos y los relojes inteligentes presentados hoy </h4>
             <img src="images/Novedades/Bluds.jpg" id="imagen" width="500"></img>
             <p> Los nuevos auriculares de primera línea de Samsung brindan la experiencia de sonido inalámbrico más inmersiva, con un nuevo diseño compacto (un 15 por ciento más pequeño) y una calidad de audio de alta fidelidad (Hi-Fi) de 24 bits. Estos dispositivos cuentan con tecnología de cancelación de ruido (ANC) 
                y llegarán al mercado por 230 dólares. </p>
                <hr></hr>

                <h3>OnePlus presenta el smartphone OnePlus 10T, con pantalla de 6,7 pulgadas y carga completa en 19 minutos</h3>
                <h4>Con el cargador de 150 watts puede completar la carga de la batería, de 4800 mAh, en 19 minutos; el teléfono tiene un chip Snapdragon 8+ Gen 1, y pierde el switch para silenciar el teléfono que fue un clásico a lo largo de su historia</h4>
                <img src="images/Novedades/Oneplus.jpg" id="imagen" width="500"></img>
                <p>OnePlus 10T es un dispositivo que alcanza los 203,5 gramos de peso y los 8,75 mm de grosor. Integra un panel AMOLED de 6,7 pulgadas, ofrece una resolución de 2412 x 1080 pixeles y una razón de aspecto 20,1:9. Asimismo, presenta una tasa de refresco adaptativa de 12 0Hz. El teléfono móvil está fabricado con la plataforma móvil Snapdragon 8+ Gen 1, con una GPU Adreno 730, y presenta dos configuraciones: 8 o 16 GB de memoria RAM , así como dos capacidades de almacenamiento interno (128 GB o 256 GB). Por otro lado, el fabricante ha puntualizado que, combinadas estas tecnologías con su sistema de refrigeración, se pueden realizar acciones cotidianas de forma más rápida y durante más tiempo.</p>
                <hr></hr>

                <h3>The Freestyle: Samsung pone en venta su proyector portátil en la Argentina</h3>
                <h4>Pesa 700 gramos, parece una lámpara y ofrece una imagen Full HD de hasta 100 pulgadas; integra las mismas funciones de Smart TV que los televisores convencionales.</h4>
                <img src="images/Novedades/FreestyleSamnung.jpg" id="imagen" width="500"></img>
                <p>The Freestyle se destaca de otros proyectores por su diseño tubular, similar al de una lámpara direccional de pared o de techo. Tiene una lámpara LED de 20.000 horas de vida y resolución Full HD, con una tasa de refresco de 60 Hz, además de ofrecer HDR. Pesa 700 gramos y se puede enchufar a una batería vía su puerto USB-C para ser realmente portátil, aunque la batería debe tener una salida de 20 voltios (ese es el Battery Pack que podrán comprar con descuento quienes se sumen a la preventa; se puede usar con otras baterías). Pero además tiene una entrada micro HDMI y Wi-Fi integrado, por lo que funciona como un Smart TV. De hecho, la compañía incluyó el mismo procesador que en un televisor, por lo que están disponibles todas las aplicaciones clásicas de streaming de video, además de aceptar comandos de voz de Bixby o Alexa.
              </p>
              <hr></hr>
           </div>
        </section>
    )
}
export default NovedadesPage