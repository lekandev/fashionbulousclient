import styles from './Subscribe.module.scss'

const Subscribe = () => {
    return (
        <div className={styles.subscribe}>
            <h2 className={styles.subscribe__title}>Subscribe to our mailing list <br/> for more information on new products.</h2>
            <form action="" className={styles.subscribe__form}>
                <input type="email" placeholder="janedoe@gmail.com" />
                <input type="button" value="Submit" />
            </form>
        </div>
    )
}

export default Subscribe
