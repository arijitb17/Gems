"use client"

import { CartProductType } from "../product/[id]/Pdetails";

interface setqtyProps{
    cartCounter? : boolean;
    cartProduct: CartProductType;
    handleqtyincrease: () => void;
    handleqtydecrease: () => void;
}

const btnstyle ='border-[1.2px] border-slate-300 px-2 rounded'
const Setquantity: React.FC<setqtyProps> = ({cartProduct,cartCounter,handleqtydecrease,handleqtyincrease}) => {
  
        return (
            <div className="flex items-center gap-8">
                {cartCounter ? null : <div className="font-semibold">QUANTITY: </div>}
                <div className="flex gap-4 items-center text-base">
                    <button onClick={handleqtydecrease} className={btnstyle}>-</button>
                    <div>{cartProduct.quantity}</div>
                    <button onClick={handleqtyincrease} className={btnstyle}>+</button>
                </div>
            </div>
        );
    };
 
export default Setquantity;