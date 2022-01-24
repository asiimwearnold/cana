import style from '../styles/Featured.module.css';
import Image from "next/image";
import {useState} from "react"

const Featured = () =>
{
    
    const [index, setIndex] = useState(0);
    const images = [
        "/img/photo-15.jfif",
         "/img/photo-156.jfif",
         "/img/photo-1457.jfif"
    ];
    const handleArrow = (direction) =>
    {
        if (direction === "l")
        {
            setIndex(index !== 0 ? index-1 : 2)
        }
        if (direction === "r")
        {
            setIndex(index !== 2 ? index+1 : 0)
        }
    }
    return (
        <div className={style.container} >
           
            
            <div className={style.wrapper} style={{ transform: `translatex(${-100 * index}vw)` }}>
                
                    {images.map((img, i) => (
                        <div className={style.imgContainer} key ={i}>
                        <Image src={img}  alt=""   width={2050}
                        height={1000}/>
                            </div> 
                  ))}
                
                
                <div className={style.arrowContainer} style={{left: 100}} onClick={()=>handleArrow("l")}>
                <Image src="/img/arrow.png" alt="" width={32} height={32}/>
            </div>
             
            </div>
            <div className={style.arrowContainer} style={{right: -70}} onClick={()=>handleArrow("r")}>
            <Image src="/img/arrow2.png" alt="" width={32} height={32}/>
            </div>
            
        </div>
    )
}

export default Featured;