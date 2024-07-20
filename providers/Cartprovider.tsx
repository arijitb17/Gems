"use client"
import { Cartcontextprovider } from "../hooks/useCart"
interface cartproviderprops{
    children: React.ReactNode
}

const Cartprovider:React.FC<cartproviderprops> = ({children}) => {
    return ( 
        <Cartcontextprovider>{children}</Cartcontextprovider>
     );
}
 
export default Cartprovider;