import React from "react";
import Layout from "../layout";

export default function TourPage() {
    return (
        <Layout>
            <section id="tourPage">
                <h1>Tour 360°</h1>
                <article className="view">
                    <h2>Ingreso</h2>
                    <iframe
                        src="https://s.insta360.com/p/f50a08da1f635b32066d3a6044518ddd?e=true&locale=en-us"
                        frameBorder="0"
                        width="666"
                        height="413"
                        title="Planta baja"
                    ></iframe>
                </article>
                <article className="view">
                    <h2>Planta Baja</h2>
                    <iframe
                        className="embed_iframe"
                        src="https://s.insta360.com/p/325dd81ba70cb73c1751dd5d93b45a1b?e=true&locale=en-us"
                        frameBorder="0"
                        width="666"
                        height="413"
                        title="entrada"
                    ></iframe>
                </article>
                <article className="view">
                    <h2>Auditorio</h2>
                    <iframe
                        src="https://s.insta360.com/p/f30982ce2ff2ef282ab6d40dca9d8dcb?e=true&locale=en-us"
                        frameBorder="0"
                        width="666"
                        height="413"
                        title="Auditorio"
                    ></iframe>
                </article>
                <article className="view">
                    <h2>Planta alta</h2>
                    <iframe
                        src="https://s.insta360.com/p/8cf86aecce08fbd319f1e7a479d3ca46?e=true&locale=en-us"
                        frameBorder="0"
                        title="Planta alta"
                        width="666"
                        height="413"
                    ></iframe>
                </article>
                <article className="view">
                    <h2>Estudio fotográfico</h2>
                    <iframe
                        src="https://s.insta360.com/p/cced09b850a10efd2e46a281f1ee0c28?e=true&locale=en-us"
                        frameBorder="0"
                        title="Estudio fotográfico"
                        width="666"
                        height="413"
                    ></iframe>
                </article>
            </section>
        </Layout>
    );
}
