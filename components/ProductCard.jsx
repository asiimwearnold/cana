import style from "../styles/productCard.module.css"
const ProductCard = () =>
{
    return (
        <div className={style.container}>
           
            <h1 className={style.container}>1 Accer</h1>
            <span className={style.price}>700,000sh</span>
            <p className={style.desc}>
                This is one accer of coffee plantation land,
                its available to you at no cost. 
                costs incured include money garden matainance 
            </p>
            Coffee
        </div>
    )
}

export default ProductCard
