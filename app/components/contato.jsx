import style from "../css/contato.module.css"

export default function contato () {
    return (
        <div className={style.div} id="contato">
            <div className={style.div_c}>
                <h2 className={style.h2}>Entre em Contato</h2>

                <form className={style.form} action="/enviar-mensagem" method="POST">
                    <label className={style.labe} htmlFor="name">Nome</label>
                    <input className={style.input} type="text" id="name" name="name" placeholder="Seu nome" required />

                    <label className={style.label} htmlFor="email">Email</label>
                    <input className={style.input} type="email" id="email" name="email" placeholder="Seu email" required />

                    <label className={style.label} htmlFor="message">Mensagem</label>
                    <textarea  className={style.textatea} id="message" name="message" rows="5" placeholder="Sua mensagem" required></textarea>

                    <button className={style.button} type="submit">Enviar</button>
                </form>

                <div className="contact-info">
                    <p>Email: exemplo@email.com</p>
                    <p>Telefone: (11) 1234-5678</p>
                    <p>Redes Sociais: <a href="#">Instagram</a> | <a href="#">LinkedIn</a></p>
                </div>
            </div>
        </div>
    );
}