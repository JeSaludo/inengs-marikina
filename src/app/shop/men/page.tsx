import SideNav from '@/app/components/shop/sidenav'
import CardList from '@/app/components/shop/CardList';
import { FaSortDown } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";
export default function MenPage(){
    return(<>
       <div className="p-4 flex justify-between px-6">
            <h1 className="text-2xl font-bold ">Men Shoes and Sneaker (199)</h1>
            <div className='space-x-4 flex'>
                <div className='hover:cursor-pointer flex justify-between'>Show Filter <VscSettings className='pt-1' /></div>
                <div className='hover:cursor-pointer flex justify-between' >Sort By <FaSortDown  /></div>
            </div>
       </div>
    
        <SideNav/>
        <div className="ml-72">
            <CardList/>

        </div>

    </>);
}