import AdminNav from "../components/admin/AdminNav";


export const metadata={
    title:'JGJ Admin',
    description: 'Jupiter Gems & Jewellers Admin Dashboard'
}


const Aminlayout = ({children}:{children:React.ReactNode}) => {
    return ( <div>
        <div><AdminNav/></div>
        {children}
    </div> );
}
 
export default Aminlayout;