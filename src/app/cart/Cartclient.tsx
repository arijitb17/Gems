"use client"

import { useCart } from "../../../hooks/useCart";
import Link from "next/link";
import {MdArrowBack} from "react-icons/md";
import Button from "../components/Button";
import Itemcontent from "./Itemcontent";
import { formatprice } from "../../../utils/formatprice";

const Cartclient = () => {
    const {cartproducts,handleClearCart,carttotalamount}=useCart()

    if(!cartproducts || cartproducts.length === 0){
        return(
            <div className="flex flex-col items-center">
                <div className="text-2xl">Your cart is empty</div>
                <div className="flex-grow h-[300px]">
                    <Link href={"/"} className="text-slate-500 flex items-center gap-1 mt-2">
                    <MdArrowBack />
                    <span>Start Shopping</span>
                    </Link>
                </div>
            </div>
        )
    }
    
    return ( 
        <div className="px-4">
            <h1 style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '2rem' }}>Shopping Cart</h1>
            <div className="grid grid-cols-5 text-xs gap-4 pb-2 items-center mt-8  font-medium">
                <div className="col-span-2 justify-self-start">PRODUCT</div>
                <div className="justify-self-center">PRICE</div>
                <div className="justify-self-center">QUANTITY</div>
                <div className="justify-self-end">TOTAL</div>
            </div>
            <div>
                {cartproducts && cartproducts.map((item)=> {
                    return <Itemcontent key={item.id} item={item}/>
                })}
            </div>
            <div className="border-t-[1.5px] border-slate-200 py-4 flex justify-between gap-4">
                <div className="w-[90px]">
                    <Button label="Clear Cart" onClick={()=> {handleClearCart()}} small outline/>
                </div>
                <div className="text-sm flex flex-col gap-1 items-start">
                    
                        <div className="flex text-base font-semibold w-full justify-between">
                        <span>Subtotal</span>
                        <span>{formatprice(carttotalamount)}</span>
                        </div>
                        
                        <p className="text-slate-500">Taxes and shipping calculate at checkout</p>
                    <Button label="Checkout" onClick={()=> {}} />
                    <Link href={"/"} className="text-slate-500 flex items-center gap-1 mt-2">
                    <MdArrowBack />
                    <span>Continue Shopping</span>
                    </Link>
                </div>
            </div>
        </div>
     );
}
 
export default Cartclient
