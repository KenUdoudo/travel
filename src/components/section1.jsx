import one from '../assets/1.jpg';
import two from '../assets/2.jpg';
import three from '../assets/3.jpg';
import four from '../assets/4.jpg';
const Sec1 = () => {
    return (
        <div className='mt-[20px]'>
            <div className="flex flex-row justify-center items-center w-full space-x-[10px]">
                <div className="w-[25%] h-full object-cover"><img src={ one }/></div>
                <div className="w-[25%] h-full object-cover"><img src={ two }/></div>
                <div className="w-[25%] h-full object-cover"><img src={ three }/></div>
                <div className="w-[25%] h-full object-cover"><img src={ four }/></div>
            </div>
            <div className='flex flex-row justify-between items-center px-[20px] mt-[20px]'>
                <p className='text-[50px] font-bold'>Transforming <br />Ideas Photography</p>
                <div className='flex flex-col justify-end items-end gap-[10px]'>
                    <p className='text-[13px] text-[#797878] text-right'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit tempore <br /> aut ea inventore optio rerum corrupti, quia impedit, voluptatem doloribus exercitationem <br /> et nihil esse possimus! Velit consequatur eveniet voluptate.</p>
                    <div className='h-[25px] w-[25px] bg-[#797878] rounded-full'></div>
                </div>
            </div>
        </div>
    );
}
 
export default Sec1;