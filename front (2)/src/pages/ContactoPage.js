import '../styles/components//pages/ContactoPage.css'
const ContactoPage = (props) => {
    return (
        <main className="holder contacto">
            <div>
                <h2> Contacto Rápido </h2>
                <form action="" method="" className="formulario">
                    <p>
                        <label for="nombre"> Nombre </label>
                        <input type="text" name="nombre" placeholder='Nombre'/>
                    </p>
                    <p>
                        <label for="email"> Email </label>
                        <input type="text" name="email" placeholder='Email'/>
                    </p>
                    <p>
                        <label for="telefono"> Telefono </label>
                        <input type="text" name="telefono" placeholder='Telefono'/>
                    </p>
                    <p>
                        <label for="mensaje"> Mensaje </label>
                        <textarea name="mensaje" placeholder='Mensaje'></textarea>
                    </p>
                    <p>
                        <input type="submit" value="enviar"/>
                    </p>
                </form>
            </div>
            <div class="datos">
                <h2> Otras vias de comunicacion </h2>
                <p> Tambien puede contactarse con nosotros por los siguientes medios: </p>
                <ul>
                    <li> <img src='/images/Iconos/icons8-añadir-teléfono-30.png' width="20"></img> Telefono: 430000000 </li>
                    <li> <img src='/images/Iconos/icons8-nuevo-post-30.png' width="20"></img> Email: tnieto025@gmail.com </li>
                    <li> <img src='/images/Iconos/icons8-instagram-viejo-30.png' width="20"></img> Instagram: MundoTec </li>
                    <li> <img src='/images/Iconos/icons8-facebook-30.png' width="20"></img> Facebook: MundoTec </li>
                    <li> <img src='/images/Iconos/icons8-twitter-30.png' width="20"></img> Twitter: MundoTec </li>
                </ul>
            </div>
        </main>
    )
}
export default ContactoPage;