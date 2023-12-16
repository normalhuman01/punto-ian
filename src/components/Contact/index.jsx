import React, { useEffect, useState } from "react";
import SectionTittle from "../SectionTittle";

export default function Contact() {
    const [width, setWidth] = useState(0);
    const [map, setMap] = useState("false");
    useEffect(() => {
        setWidth(window.screen.width);
    }, []);
    if (width < 414) {
        import("../../assets/img/maps-mobile-2.jpg")
            .then((map) => {
                setMap(map.default);
            })
            .catch((err) => {
                console.log(err);
            });
    } else if (width > 414 && width < 1280) {
        import("../../assets/img/maps-mobile.jpg")
            .then((map) => {
                setMap(map.default);
            })
            .catch((err) => {
                console.log(err);
            });
    } else {
        import("../../assets/img/maps.jpg")
            .then((map) => {
                setMap(map.default);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return (
        <>
            <section id="contacto">
                <SectionTittle tittle="¿Dónde estamos?" />
                <div className="contacto-info text-focus-in">
                    <p>
                        No dudes en contactarnos por cualquier inquietud. Podes
                        venir a visitarnos para conocer nuestros espacios o
                        podes experimentar un dia de trabajo de cortesía.
                    </p>
                    <strong>Contacto</strong>
                    <p>(+54) 341 3085430</p>
                    <small>
                        <a
                            href="https://g.page/ian_Coworking?share"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Córdoba 2035 - Rosario, SF (2000)
                        </a>
                    </small>
                    <a
                        href="https://wa.link/ntkshl"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="enviar-msg hvr-pop">
                            Enviar Mensaje
                        </button>
                    </a>
                </div>
                <a
                    href="https://g.page/ian_Coworking?share"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="ubicacion punto ian"
                >
                    <img
                        loading="lazy"
                        className="contacto-mapa"
                        src={map}
                        alt="Ubicacion punto ian"
                    />
                </a>

                <article>
                    <SectionTittle tittle="Nos Eligieron" />

                    <div className="slider">
                        <div className="slide-track">
                            <div className="slide">
                                <img src="/marcas/b&b.png" alt="b&B" />
                            </div>
                            <div className="slide">
                                <img
                                    src="/marcas/bonafide.png"
                                    alt="bonafide"
                                />
                            </div>
                            <div className="slide">
                                <img src="/marcas/cabify.png" alt="cabify" />
                            </div>
                            <div className="slide">
                                <img src="/marcas/casatti.png" alt="casatti" />
                            </div>
                            <div className="slide">
                                <img src="/marcas/globant.png" alt="globant" />
                            </div>
                            <div className="slide">
                                <img
                                    src="/marcas/gobetween.png"
                                    alt="gobetween"
                                />
                            </div>
                            <div className="slide">
                                <img src="/marcas/jb.png" alt="jb" />
                            </div>
                            <div className="slide">
                                <img
                                    src="/marcas/maringroup.png"
                                    alt="marin group"
                                />
                            </div>
                            <div className="slide">
                                <img
                                    src="/marcas/nativa.png"
                                    alt="nativa models"
                                />
                            </div>
                            <div className="slide">
                                <img
                                    src="/marcas/pedidosya.png"
                                    alt="pedidos ya"
                                />
                            </div>
                            <div className="slide">
                                <img src="/marcas/keclon.png" alt="keclon" />
                            </div>
                            <div className="slide">
                                <img src="/marcas/danone.png" alt="danone" />
                            </div>
                            <div className="slide">
                                <img
                                    src="/marcas/digital.png"
                                    alt="digital house"
                                />
                            </div>
                            <div className="slide">
                                <img
                                    src="/marcas/matbarofex.png"
                                    alt="matbarofex"
                                />
                            </div>
                            <div className="slide">
                                <img src="/marcas/fotea.png" alt="fotea" />
                            </div>
                            <div className="slide">
                                <img src="/marcas/b&b.png" alt="b&B" />
                            </div>
                            <div className="slide">
                                <img
                                    src="/marcas/bonafide.png"
                                    alt="bonafide"
                                />
                            </div>
                            <div className="slide">
                                <img src="/marcas/cabify.png" alt="cabify" />
                            </div>
                            <div className="slide">
                                <img src="/marcas/casatti.png" alt="casatti" />
                            </div>
                            <div className="slide">
                                <img src="/marcas/globant.png" alt="globant" />
                            </div>
                            <div className="slide">
                                <img
                                    src="/marcas/gobetween.png"
                                    alt="gobetween"
                                />
                            </div>
                            <div className="slide">
                                <img src="/marcas/jb.png" alt="jb" />
                            </div>
                            <div className="slide">
                                <img
                                    src="/marcas/maringroup.png"
                                    alt="marin group"
                                />
                            </div>
                            <div className="slide">
                                <img
                                    src="/marcas/nativa.png"
                                    alt="nativa models"
                                />
                            </div>
                            <div className="slide">
                                <img
                                    src="/marcas/pedidosya.png"
                                    alt="pedidos ya"
                                />
                            </div>
                            <div className="slide">
                                <img src="/marcas/keclon.png" alt="keclon" />
                            </div>
                            <div className="slide">
                                <img src="/marcas/danone.png" alt="danone" />
                            </div>
                            <div className="slide">
                                <img
                                    src="/marcas/digital.png"
                                    alt="digital house"
                                />
                            </div>
                            <div className="slide">
                                <img
                                    src="/marcas/matbarofex.png"
                                    alt="matbarofex"
                                />
                            </div>
                            <div className="slide">
                                <img src="/marcas/fotea.png" alt="fotea" />
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </>
    );
}
