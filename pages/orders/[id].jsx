import style from "../../styles/order.module.css";
import Image from "next/image"


export const Order = () =>
{
    const status = 0;
    const statusClass = (index) =>
    {
        if (index - status < 1) return style.planting
        if (index - status === 1) return style.landPreperations
        if (index - status > 1 ) return style.almostThere
    }

    return (
        <div className={style.container}>
            <div className={style.left}>
                <div className={style.row}>
                <table className={style.table}>
                    <tr className={style.tr}>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Address</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        
                    </tr>
                    <tr>
                       
                        <td >
                                <span className={style.id}>00012308</span>
                        </td>
                        <td >
                            <span classNmae={style.name}> Assimwe J Arnold </span>
                        </td>
                        <td >
                        <span classNmae={style.address}>Kampala Kawempe kimwanyi Zone </span>
                        </td>
                        <td >
                            <span classNmae={style.total}> sh1.6m </span>
                        </td>
                    </tr>
                </table>
                </div>
                <div className={style.row}>
                    <div className={statusClass(0)}>
                        <Image src="" width={30} height={30 } alt="" />
                        
                        <span>Payment</span>
                        <div className={statusClass(1)}>
                        <Image src="" width={30} height={30} alt=""/>
                        </div>
                       
                    </div>
                    <div className={style.status}>
                        <Image src="" width={30} height={30 } alt="" />
                        
                        <span>Prepairing the land</span>
                        <div className={statusClass(2)}>
                        <Image src="" width={30} height={30} alt=""/>
                        </div>
                       
                    </div>
                    <div className={statusClass(3)}>
                        <Image src="" width={30} height={30 } alt="" />
                        
                        <span>Planting</span>
                        <div className={style.checkedIcon}>
                        <Image src="" width={30} height={30} alt=""/>
                        </div>
                       
                    </div>
                    <div className={statusClass(4)}>
                        <Image src="" width={30} height={30 } alt="" />
                        
                        <span>Harvesting</span>
                        <div className={style.checkedIcon}>
                        <Image src="" width={30} height={30} alt=""/>
                        </div>
                       
                    </div>
                </div>
            </div>
            <div className={style.right}>
            <div className={style.wrapper}>
                    <h2 className={style.title}>
                        CART TOTAL
                    </h2>
                    <div classsName={style.totalText}>
                        <b className={style.totalextTitle}>Subtotal:</b> sh1.6m
                    </div>
                    <div classsName={style.totalText}>
                        <b className={style.totalextTitle}>Discount:</b> sh0.0
                    </div>
                    <div classsName={style.totalText}>
                        <b className={style.totalextTitle}>Total:</b> sh1.6m
                    </div>
                    <button disabled className={style.button}> PAID </button>
                </div>
            </div>
            
        </div>
    ) 
}

export default Order