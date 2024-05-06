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
            <div className='flex flex-row'>
                <p>Transforming <br />Ideas Photography</p>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit tempore aut ea inventore optio rerum corrupti, quia impedit, voluptatem doloribus exercitationem et nihil esse possimus! Velit consequatur eveniet voluptate.</p>
                    <div className='h-[25px] w-[25px] bg-[#e9e9e9] rounded-full'></div>
                </div>
            </div>
        </div>
    );
}
 
export default Sec1;