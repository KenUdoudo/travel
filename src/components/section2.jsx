import five from '../assets/5.jpg';
const Sec2 = () => {
    return (  
        <div className='px-[20px] flex flex-row justify-center items-center w-full mt-[100px]'>
            <div className='w-[50%] flex flex-col justify-start items-start'>
                <p className='text-[13px] text-[#797878] border-[2px] px-[8px] py-[2px] rounded-full'>ABOUT US</p>
                <p className='text-[40px] font-bold'>Agency in the field of <br />Photography</p>
                <p className='text-[13px] text-[#797878]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit tempore <br /> aut ea inventore optio rerum corrupti, quia impedit, voluptatem doloribus exercitationem <br /> et nihil esse possimus! Velit consequatur eveniet voluptate.</p>
                <p>See More</p>
            </div>
            <div className='w-[50%]'>
                <img src={ five } className='h-[450px] w-full object-cover'/>
            </div>
        </div>
    );
}
 
export default Sec2;