import style from "../styles/ProductList.module.css";
import ProductCard from "./ProductCard";

const ProductList = () =>
{
    return (
        <div className={style.container}>
            <h1 className={style.title}></h1>
            <p className={style.desc}> Pilot Product </p>
            <div className={style.wrapper}>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard/>
            </div>
                
        </div>
    )
}

export default ProductList
