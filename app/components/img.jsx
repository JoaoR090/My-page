import About from "./about.jsx"
import style from "../css/img.module.css"

export default function About_m () {
    return (
        <div className={style.div}>
            <About />
            <img className={style.myimg} src="https://avatars.githubusercontent.com/u/170395194?v=4" alt="Minha foto" />
        </div>
    );
}