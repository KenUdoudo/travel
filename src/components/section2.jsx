import five from '../assets/5.jpg';
const Sec2 = () => {
    return (  
        <div className='px-[20px] flex flex-row justify-center items-center w-full'>
            <div className='w-[50%]'>
                <p>ABOUT US</p>
                <p>Agency in the field of <br />Photography</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit tempore <br /> aut ea inventore optio rerum corrupti, quia impedit, voluptatem doloribus exercitationem <br /> et nihil esse possimus! Velit consequatur eveniet voluptate.</p>
                <p>See More</p>
            </div>
            <div className='w-[50%]'>
                <img src={ five }/>
            </div>
        </div>
    );
}
 
export default Sec2;