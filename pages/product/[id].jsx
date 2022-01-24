import styles from "../../styles/Product.module.css";
import {useState} from "react"

const Product = () =>
{
    const [size, setSize] = useState(0);
    const productItem = {
        id: 1,
        img: "",
        name: "Coffe Robusta",
        price: [800000, 1000000, 1200000],
        desc:""
    }
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    
            </div>
            </div>
            
            <div className={styles.right}>
                <h1 className={styles.title}>{productItem.name}</h1>
                <span className={styles.price}>${productItem.price[size]}</span>
                <p className={styles.desc}>{productItem.desc}</p>
                <h3 className={styles.choose}>Choose Land Size</h3>
                <div className={styles.sizes}>
                    <span className={styles.number}> 1 accer </span>
                </div>
                <div className={styles.sizes}>
                    <span className={styles.number}> 2 accer </span>
                </div>
                <div className={styles.sizes}>
                    <span className={styles.number}> 3 accer </span>
                </div>
            </div>
        </div>
    )
}

export default Product
