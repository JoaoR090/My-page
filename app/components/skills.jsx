import style from "../css/skills.module.css"

export default function Skils () {
    return (
        <div id="skills" className={style.div}>
            <h2 className={style.h2}>Skills</h2>
            <div className={style.div_skills}>
                <img className={style.img} src="https://joaor090.github.io/portifolio-base/assets/css.png" alt="CSS logo" width="50" height="50" />
                <p className={style.p}>CSS</p>
                <img className={style.img} src="https://joaor090.github.io/portifolio-base/assets/js.png" alt="JavaScript logo" width="50" height="50" />
                <p className={style.p}>JavaScript</p>
                <img className={style.img} src="https://joaor090.github.io/portifolio-base/assets/python.png" alt="Python logo" width="50" height="50" />
                <p className={style.p}>Python</p>
                <img className={style.img} src="https://joaor090.github.io/portifolio-base/assets/html.png" alt="HTML logo" width="50" height="50" />
                <p className={style.p}>HTML</p>
                <img className={style.img} src="https://joaor090.github.io/portifolio-base/assets/node.png" alt="Node.js logo" width="50" height="50" />
                <p className={style.p}>Node.js</p>
            </div>
        </div>
    );
}