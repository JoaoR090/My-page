import styles from "../css/header.module.css";

export default function Header () {
    return (
        <header className={styles.header}>
            <img src="https://joaor090.github.io/portifolio-base/assets/JR.png" alt="Logo" />
            <nav className={styles.nav}>
                <a href="#sobre" lang="en" className={styles.link}>Sobre</a>
                <a href="#skills" className={styles.link}>Skills</a>
                <a href="#projetos" className={styles.link}>Projetos</a>
                <a href="#contato" className={styles.link}>Contato</a>
                <a href="https://joaor090.github.io/portifolio-base/assets/curriculo.pdf" download="curriculo_joao_ricardo.pdf" lang="en" className={styles.button}>Download CV</a>
            </nav>
        </header>
    );
}
