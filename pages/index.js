import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {

    return (
        <div className={styles.container}>
            <Head>
                <title>Сотрудничество</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div className={styles.header}>
                <div className={styles.logo}>LOGO</div>
                <div className={styles.headerItems}>
                    <div className={styles.headerItem}>О БРЕНДЕ</div>
                    <div className={styles.headerItem}>ОТВЕТСТВЕННОСТЬ</div>
                    <div className={styles.headerItem}>ГДЕ КУПИТЬ</div>
                    <div className={styles.headerItem}>ПОДДЕРЖКА</div>
                    <div className={styles.headerItem}>КОНТАКТЫ</div>
                    <div className={`${styles.headerItem} ${styles.active}`}>СОТРУДНИЧЕСТВО</div>
                </div>
            </div>
            <div className={styles.mainContainer}>
                <div className={styles.contactsContainer}>
                    <span className={styles.contactsText}>СОТРУДНИЧЕСТВО</span>
                    <span className={styles.contactsSubText}>по вопросам сотрудничества</span>
                    <span className={styles.contactsNumber} aria-label={"Нажмите, чтобы скопировать"} onClick={() => {
                        navigator.clipboard.writeText("+7 (495) 111-22-33").then(() => {
                            alert("Скопировано !")
                        })
                    }}>+7 (495) 111-22-33</span>
                </div>
                <div className={styles.formContainer}>
                    <div className={styles.formText}>
                        <span>Напишите нам, и мы предоставим</span>
                        <br />
                        <span>всю необходимую информацию.</span>
                    </div>
                    <input type={"text"} placeholder={"Ваше имя"} style={{marginBottom: "4.8vh"}}/>
                    <input type={"text"} placeholder={"Ваш e-mail"} style={{marginBottom: "11.4vh"}}/>
                    <input type={"text"} placeholder={"Ваше сообщение"} style={{marginBottom: "7.2vh"}}/>
                    <div className={styles.submitContainer}>
                        <div className={styles.submitTextContainer}>
                            <span className={styles.submitText}>заполняя форму, вы даёте</span>
                            <br />
                            <span
                                className={styles.submitSubText}>согласие на обработку персональных данных</span>
                        </div>
                        <div className={styles.submitButton}>Отправить</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
