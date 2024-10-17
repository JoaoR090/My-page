import styles from "../css/about.module.css";

export default function About () {
    return (
        <div id="sobre" className={styles.div}>
            <h2 className={styles.about}>SOBRE</h2>
            <p className={styles.aboutt}>Sou estudante de Ciência da Computação na UTFPR, com conhecimentos em desenvolvimento web utilizando HTML, CSS, JavaScript e Python. Tenho experiência no uso do VSCode para projetos pessoais e acadêmicos. Busco oportunidades para aplicar minhas habilidades de programação e aprender mais sobre o desenvolvimento de software.</p>
        </div>
    );
}