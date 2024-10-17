import style from "../css/projetos.module.css"

export default function Projetos_m () {
    return (
        <div id="projetos" className={style.div}>
            <h2 className={style.h2}>Projetos</h2>
            <div className={style.div_p}>
                <a href="https://joaor090.github.io/portifolio-base/"><img className={style.img} src="https://joaor090.github.io/portifolio-base/assets/JR.png" alt="portfólio-base" /></a>
                <a href="https://joaor090.github.io/Haken_processo_seletivo/"><img className={style.img} src="https://joaor090.github.io/Haken_processo_seletivo/assets/logo.png" alt="Haken_processo_seletivo" /></a>
            </div>
        </div>
    );
}