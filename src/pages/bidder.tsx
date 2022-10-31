import styles from "../styles/scss/bidder.module.scss"

export default function Bidder() {
    return (
        <>
            <div className={styles.bidder}>
                <div className={styles.img}>
                    <img src="/img/bidderImage.jpg" alt="bidder_image" />
                </div>

                <div className={styles.content}>
                    <div className={styles.title}>
                        <h1>
                            Ready to downsize your expenses?
                        </h1>

                        <span>
                            Find the right accommodation for you when traveling, while minimizing costs when sharing
                        </span>

                        <div className={styles.button}>
                            <button>
                                Sure
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}