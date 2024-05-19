import { useState } from "react";
import six from '../assets/6.jpg';
import seven from '../assets/7.jpg';
import eight from '../assets/8.jpg';
const Sec3 = () => {
    const [tab, setTab] = useState(0);
    return (  
        <div className="px-[20px] mt-[100px]">
            <div className="flex flex-col justify-start items-start">
                <p className='text-[13px] text-[#797878] border-[2px] px-[8px] py-[2px] rounded-full'>SERVICES</p>
                <p className='text-[40px] font-bold'>We provide various best services to<br />transform your ideas</p>
            </div>
            <div>
                <div className={`${tab === 0 ? " bg-black" : "bg-white"} flex flex-row w-full justify-around items-start px-[15px] py-[20px]`} onClick={()=> setTab(0)}>
                    <div className="w-[30%]">
                        <img src={ six } className={`${tab === 0 ? "w-full h-[300px]" : "w-[250px] h-[200px]"} object-cover`}/>
                    </div>
                    <p className={`${tab === 0 ? " text-white" : "text-black"} w-[30%] text-bold text-[30px]`}>The Japans</p>
                    <div className={`${tab === 0 ? " text-white" : "text-[#797878]"} w-[30%] h-full text-[13px] flex flex-col justify-normal items-start space-y-[180px]`}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit tempore <br /> aut ea inventore optio rerum corrupti, quia impedit, voluptatem doloribus exercitationem <br /> et nihil esse possimus! Velit consequatur eveniet voluptate.</p>
                        <div className={`${tab === 0 ? "block" : "hidden"} h-[35px] w-[35px] bg-[#797878] rounded-full`}></div>
                    </div>
                </div>
                <div className={`${tab === 1 ? " bg-black" : "bg-white"} flex flex-row w-full justify-around items-start px-[15px] py-[20px]`} onClick={()=> setTab(1)}>
                    <div className="w-[30%]">
                        <img src={ seven } className={`${tab === 1 ? "w-full h-[300px]" : "w-[250px] h-[200px]"} object-cover`}/>
                    </div>
                    <p className={`${tab === 1 ? " text-white" : "text-black"} w-[30%] text-bold text-[30px]`}>The Sand Dunes</p>
                    <div className={`${tab === 1 ? " text-white" : "text-[#797878]"} w-[30%] h-full text-[13px] flex flex-col justify-normal items-start space-y-[180px]`}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit tempore <br /> aut ea inventore optio rerum corrupti, quia impedit, voluptatem doloribus exercitationem <br /> et nihil esse possimus! Velit consequatur eveniet voluptate.</p>
                        <div className={`${tab === 1 ? "block" : "hidden"} h-[35px] w-[35px] bg-[#797878] rounded-full`}></div>
                    </div>
                </div>
                <div className={`${tab === 2 ? " bg-black" : "bg-white"} flex flex-row w-full justify-around items-start px-[15px] py-[20px]`} onClick={()=> setTab(2)}>
                    <div className="w-[30%]">
                        <img src={ eight } className={`${tab === 2 ? "w-full h-[300px]" : "w-[250px] h-[200px]"} object-cover`}/>
                    </div>
                    <p className={`${tab === 2 ? " text-white" : "text-black"} w-[30%] text-bold text-[30px]`}>PhotoShop</p>
                    <div className={`${tab === 2 ? " text-white" : "text-[#797878]"} w-[30%] h-full text-[13px] flex flex-col justify-normal items-start space-y-[180px]`}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit tempore <br /> aut ea inventore optio rerum corrupti, quia impedit, voluptatem doloribus exercitationem <br /> et nihil esse possimus! Velit consequatur eveniet voluptate.</p>
                        <div className={`${tab === 2 ? "block" : "hidden"} h-[35px] w-[35px] bg-[#797878] rounded-full`}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Sec3;