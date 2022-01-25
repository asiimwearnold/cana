import styles from "../styles/Cart.module.css";
import Image from "next/image";


const cart = () =>
{
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <table className={styles.table}>
                    <tr className={styles.tr}>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        
                    </tr>
                    <tr>
                        <td className={styles.imgContainer}>
                        <Image src="" layout="fill" objectFit="cover" alt="" />
                        </td>
                        <td className={styles.name}>
                        Robusta
                        </td>
                        <td className={styles.price}>
                            <span classNmae={styles.price}> sh800000 </span>
                        </td>
                        <td className={styles.quantity}>
                        <span classNmae={styles.quantity}> 2accres </span>
                        </td>
                        <td className={styles.total}>
                            <span classNmae={styles.total}> sh1.6m </span>
                        </td>
                    </tr>
                </table>
            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>
                        CART TOTAL
                    </h2>
                    <div classsName={styles.totalText}>
                        <b className={styles.totalextTitle}>Subtotal:</b> sh1.6m
                    </div>
                    <div classsName={styles.totalText}>
                        <b className={styles.totalextTitle}>Discount:</b> sh0.0
                    </div>
                    <div classsName={styles.totalText}>
                        <b className={styles.totalextTitle}>Total:</b> sh1.6m
                    </div>
                    <button className={styles.button}> CHECKOUT NOW!</button>
                </div>
            </div>
        </div>
    )
}