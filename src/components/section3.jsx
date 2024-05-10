import { useState } from "react";
import six from '../assets/6.jpg';
const Sec3 = () => {
    const [tab, setTab] = useState(0);
    return (  
        <div className="px-[20px] mt-[100px]">
            <div className="flex flex-col justify-start items-start">
                <p className='text-[13px] text-[#797878] border-[2px] px-[8px] py-[2px] rounded-full'>SERVICES</p>
                <p className='text-[40px] font-bold'>We provide various best services to<br />transform your ideas</p>
            </div>
            <div>
                <div className={`${tab === 0 ? " bg-white" : "bg-black"} flex flex-row w-full justify-around items-start px-[15px] py-[10px]`} onClick={()=> setTab(0)}>
                    <div className="w-[30%]">
                        <img src={ six } className="w-full h-[300px] object-cover"/>
                    </div>
                    <p className={`${tab === 0 ? " text-black" : "text-white"} w-[30%] text-bold text-[30px]`}>Design Interior</p>
                    <p className={`${tab === 0 ? " text-[#797878]" : "text-white"} w-[30%] text-[13px]`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit tempore <br /> aut ea inventore optio rerum corrupti, quia impedit, voluptatem doloribus exercitationem <br /> et nihil esse possimus! Velit consequatur eveniet voluptate.</p>
                </div>
            </div>
        </div>
    );
}
 
export default Sec3;