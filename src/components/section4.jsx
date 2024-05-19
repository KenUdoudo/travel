import nine from '../assets/9.jpg';
import ten from '../assets/10.jpg';
import eleven from '../assets/11.jpg';
import twelve from '../assets/12.jpg';
const Sec4 = () => {
    return (  
        <div className="px-[20px] mt-[100px]">
            <div className="flex flex-col justify-start items-start">
                <p className='text-[13px] text-[#797878] border-[2px] px-[8px] py-[2px] rounded-full'>OUR PROJECT</p>
                <p className='text-[40px] font-bold'>Explore our projects, where each<br />project reflects innovation</p>
            </div>
            <div className="flex flex-col w-full relative">
                <div className='w-[55%] flex flex-col items-end absolute right-0'>
                    <img src={ nine } className='w-full h-[700px] object-cover'/>
                    <p className='text-[30px] font-semibold'>NEON LIGHTS</p>
                    <p className='text-[20px] text-[#797878]'>United States / Portait Photography</p>
                </div>
                <div className='w-[40%] flex flex-col items-start absolute top-[500px]'>
                    <img src={ ten } className='w-full h-[500px] object-cover'/>
                    <p className='text-[30px] font-semibold'>SHIMMERING</p>
                    <p className='text-[20px] text-[#797878]'>United States / Portait Photography</p>
                </div>
                <div className='w-[70%] flex flex-col items-end absolute right-0 top-[1050px]'>
                    <img src={ eleven } className='w-full h-[500px] object-cover'/>
                    <p className='text-[30px] font-semibold'>SUMMER PALMS</p>
                    <p className='text-[20px] text-[#797878]'>Thailand / Photography</p>
                </div>
                <div className='w-[50%] flex flex-col items-start absolute top-[1600px]'>
                    <img src={ twelve } className='w-full h-[500px] object-cover'/>
                    <p className='text-[30px] font-semibold'>HILL DRIVE</p>
                    <p className='text-[20px] text-[#797878]'>Swiss Alps / Urban Photography</p>
                </div>
            </div>
            
        </div>
    );
}
 
export default Sec4;