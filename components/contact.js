import React, { useState } from 'react';


function contact(props) {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    const corIcon = {
        color: "#FF214F",
    }

    const button = {
        border: "none",
        outline: "none",
        cursor: "pointer",
        color: "#fff",
        backgroundColor: "#ff214f",
        display: "inline-block",
        padding: "10px 45px",
        fontFamily: "Montserrat",
        position: "relative",
        overflow: "hidden",
    }

    function handleContato(e) {
        e.preventDefault();

        const data = {
            nome, email, mensagem
        }

        console.log(data);
    }

    return (
        <div className="arlo_tm_section" id="contact" >
            <div className="arlo_tm_contact" style={{ backgroundColor: "#101010" }}>
                <div className="container">
                    <div className="arlo_title_holder">
                        <span>Alguma dúvida? Entre em contato</span>
                        <h3>Contato</h3>
                    </div>
                    <div className="contact_inner">
                        <div className="short_list">
                            <ul>
                                <li>
                                    <div style={{ textAlign: "center" }}>
                                        <i className="fas fa-map-marker-alt fa-2x" style={corIcon}></i>
                                        <h3>Localização</h3>
                                        <p>Brasil - Pernambuco</p>
                                    </div>
                                </li>
                                <li>
                                    <div style={{ textAlign: "center" }}>
                                        <i className="fas fa-envelope-open-text fa-2x" style={corIcon}></i>
                                        <h3>E-mail</h3>
                                        <p>alex.ricardo1999hotmail.com</p>
                                    </div>
                                </li>
                                <li>
                                    <div style={{ textAlign: "center" }}>
                                        <i className="fab fa-whatsapp fa-2x" style={corIcon}></i>
                                        <h3> Whatsapp</h3>

                                        <p>+55 (81) 98572-4176 </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="fields">
                            <form onSubmit={handleContato} className="contact_form" >
                                <div className="returnmessage" data-success="Your message has been received, We will contact you soon." />
                                <div className="empty_notice"><span>Please Fill Required Fields</span></div>
                                <div className="first">
                                    <ul>
                                        <li>
                                            <input type="text" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} required />
                                        </li>
                                        <li>
                                            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
                                        </li>
                                    </ul>
                                </div>
                                <div className="last">
                                    <textarea placeholder="Mensagem" value={mensagem} onChange={e => setMensagem(e.target.value)} required />
                                </div>
                                <div className="arlo_tm_button">
                                    <button type="submit" style={button}>Enviar Formulário</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default contact;