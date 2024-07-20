"use client"
import { formatprice } from "../../../utils/formatprice";
import { CartProductType } from "../product/[id]/Pdetails";
import Link from "next/link";
import Image from "next/image";
import Setquantity from "../components/Setquantity";
import { useCart } from "../../../hooks/useCart";

interface itemcontentProps{
    item: CartProductType
}

const Itemcontent:React.FC<itemcontentProps> = ({item}) => {

    const {handleRemoveproduct, handlecartqtyincrease, handlecartqtydecrease,}= useCart()

    return ( 
        <div className="grid grid-cols-5  text-xs md:text-sm gap-4 border-[1.5px] border-slate-500 py-4 items-center">
            <div className="col-span-2 justify-self-start flex gap-2 md:gap-4">
                <Link href={`/product/${item.id}`}>
                <div className="relative w-[70px] aspect-square ">
                    <Image src={item.selectedImg.image}
                    alt={item.name}
                    fill
                    className="object-contain mx-2" />
                </div>
                </Link>
                <div className="flex flex-col justify-between ml-4">
                    <Link href={`/product/${item.id}`}>
                    {item.name}
                    </Link>
                    <div>{item.selectedImg.color}</div>
                    <div className="w-[70px]">
                        <button className="text-slate-500 underline" onClick={()=> handleRemoveproduct(item)}>Remove</button>
                    </div>
                </div>
            </div>
            <div className="justify-self-center">{formatprice(item.price)}</div>
            <div className="justify-self-center">
                <Setquantity 
                cartCounter={true}
                cartProduct={item}
                handleqtyincrease={()=> {handlecartqtyincrease(item)}}
                handleqtydecrease={()=> {handlecartqtydecrease(item)}}
                />
            </div>
            <div className="justify-self-end font-semibold mr-2">
                {formatprice(item.price * item.quantity)}
            </div>
        </div>
     );
}
 
export default Itemcontent;