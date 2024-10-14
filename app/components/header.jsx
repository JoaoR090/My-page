import styles from "../css/header.module.css";

export default function Header () {
    return (
        <header className={styles.header}>
            <img src="https://joaor090.github.io/portifolio-base/assets/JR.png" alt="Logo" />
            <nav className={styles.nav}>
                <a href="" lang="en" className={styles.link}>Skills</a>
                <a href="" className={styles.link}>Projetos</a>
                <a href="" className={styles.link}>Sobre</a>
                <a href="" className={styles.link}>Contato</a>
                <a href="" lang="en" className={styles.button}>Download CV</a>
            </nav>
        </header>
    );
}
