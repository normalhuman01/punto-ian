import React from "react";
import Layout from "../layout";
import imgBackground from "../assets/img/background-header-puntoian.jpg";
import ScrollDownIcon from "../components/ScrollDownIcon";

export default function Community() {
    return (
        <Layout>
            <section id="comunidad">
                <div>
                    <img
                        loading="lazy"
                        src={imgBackground}
                        alt="Nuestra comunidad"
                    />
                    <ScrollDownIcon />
                </div>
                <div className="comunidad-tarifario">
                    <h1>Tarifario de Créditos</h1>
                    <h2>¿Con qué servicios contamos en •ian Co.?</h2>
                    <p>
                        ¡Gracias por preguntar! <br />
                        Para empezar, contamos con el espacio ideal para que
                        puedas concentrarte en lo que más te gusta y le des
                        rienda suelta a tu creatividad. ¿No te parece
                        suficiente? <br />
                        ¿Y qué opinás de esto?
                    </p>
                    <ul>
                        <li>Internet alta velocidad.</li>
                        <li>Lingas de seguridad para notebooks.</li>
                        <li>Cocina totalmente equipada.</li>
                        <li>Baño para personas con movilidad reducida</li>
                        <li>Mobiliario cómodo y moderno.</li>
                        <li>Acceso a estacionamiento.</li>
                        <li>Acceso a Café Bonafide.</li>
                        <li>Luz natural.</li>
                        <li>
                            Y lo más importante: una comunidad con muchas ganas
                            de crecer.
                        </li>
                    </ul>
                    <p>
                        ¡Pero eso no es todo! ¿Necesitás un lugar donde reunirte
                        con tus clientes? ¿Espacio donde guardar tus equipos? No
                        te preocupes, eso también lo tenemos cubierto.
                    </p>
                    <h2>¿Qué son los créditos?</h2>
                    <p>
                        Podés pensar en los créditos como la moneda local de
                        nuestro espacio. Cada abono te regala una cantidad de
                        créditos con una validez mensual que podés canjear según
                        más te beneficie.
                    </p>
                    <p>
                        Si te quedaste créditos para este mes, no te preocupes.
                        Los créditos se comercializan también en packs de 10, 50
                        y 100 unidades que podés adquirir desde la web o bien en
                        nuestro espacio. Estos créditos no se vencen nunca.
                    </p>
                    <h2>¿En qué puedo canjear mis créditos?</h2>
                    <ul>
                        <li>
                            Sala de reuniones, capacidad para 12 personas.
                            Totalmente equipada con paneles acústicos, televisor
                            pantalla plana, chromecast, proyector, enchufes
                            multiforma.
                            <li>1 hora, 3 créditos.</li>
                        </li>
                        <li>
                            Lockers para uso personal.
                            <li>Mes completo, 3 créditos.</li>
                        </li>
                    </ul>
                    <p>
                        ¡Y atenti a los eventos que vamos a ir organizando
                        durante el año!
                    </p>
                </div>
                <div className="comunidad-manual">
                    <h1>Manual de Convivencia</h1>
                    <p>
                        A continuación les dejamos algunos lineamientos a tener
                        en cuenta para asegurarnos de que nuestro tiempo en •ian
                        Co. sea tan ameno y productivo como sea posible.
                    </p>
                    <a
                        href="https://drive.google.com/file/d/1-psweVSSlXfHVqAresbBlORjreaMlZgC/view"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="hvr-pop">Ver el manual</button>
                    </a>
                </div>
            </section>
        </Layout>
    );
}
