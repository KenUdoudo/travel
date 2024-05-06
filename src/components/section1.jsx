import one from '../assets/1.jpg';
import two from '../assets/2.jpg';
import three from '../assets/3.jpg';
import four from '../assets/4.jpg';
const Sec1 = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center w-full h-[70px]">
                <div className="w-[25%] h-full object-cover"><img src={ one }/></div>
                <div className="w-[25%] h-full object-cover"><img src={ two }/></div>
                <div className="w-[25%] h-full object-cover"><img src={ three }/></div>
                <div className="w-[25%] h-full object-cover"><img src={ four }/></div>
            </div>
        </div>
    );
}
 
export default Sec1;