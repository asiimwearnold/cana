import styles from "../styles/Footer.module.css"

const Footer = () =>
{
    return (
        <div className={styles.container}>
            <div className={styles.item}></div>
            footer
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>
                        OH Yes
                        Farming on your Smartphone
                    </h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>Find Our Offices</h1>
                    <p className={styles.text}>
                        1654 kampala road <br />
                        bulevard Building <br />
                        Tel:(+256) 705-109-673
                    </p>
                    <p className={styles.text}>
                        1654 kampala road <br />
                        bulevard Building <br />
                        Tel:(+256) 705-109-673
                    </p>
                    <p className={styles.text}>
                        1654 kampala road <br />
                        bulevard Building <br />
                        Tel:(+256) 705-109-673
                    </p>

                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>WORKING HOURS</h1>
                    <p className={styles.text}>
                        MONDAY - FRIDAY <br />
                        7:30am - 5:30pm

                    </p>
                    <p className={styles.text}>
                        SATURDAY <br />
                        9:30am - 12:30pm

                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
