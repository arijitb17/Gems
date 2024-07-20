"use client"
import { useRouter } from "next/navigation";
import { useCart } from "../../../hooks/useCart";
import {CiShoppingCart} from 'react-icons/ci'

const Cartcount = () => {
    const {carttotalqty} = useCart();
    const router= useRouter();
    return ( 
        <div className="relative cursor-pointer" onClick={()=> router.push('/cart')}>
            <div className="text-3xl text-white">
                <CiShoppingCart />
            </div>
            <span className="absolute top-[-10px] right-[-10px] bg-slate-900 text-white h-6 w-6 rounded-full flex items-center
            justify-center text-sm">
                {carttotalqty} 
            </span>
        </div>
     );
}
 
export default Cartcount;