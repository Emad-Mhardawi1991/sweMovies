import Button from "../../ui/button/button";

const Footer =()=>{
    return(
        <div className="bg-dark_gray">
            <div className="bg-primary_red py-6">
                <div className="container flex justify-center items-center flex-col md:flex-row gap-6 ">
                    <div className=" md:w-full text-center md:text-left">
                        <h3 className="text-white text-3xl md:text-2xl lg:text-3xl font-bold">Subscribe to our news letter</h3>
                        <p className="text-sm lg:text-[16px]">Enter your email to receive our news and offers </p> 
                    </div>
                    <form className="w-full  relative rounded-md flex flex-col justify-center items-center gap-6">
                        <input className="py-4 px-2  w-full rounded-md" type='text' placeholder="Enter Your Email"/>
                        <button className='md:absolute  py-3 rounded-md md:right-0 md:top-0 bg-dark_gray text-white h-full px-8'>Subscribe</button>
                        
                    </form>
                </div>
            </div>

            <div className="container flex flex-col justify-center py-16 items-center gap-6 md:flex-row md:justify-between">
                <h3 className="text-primary_red text-2xl font-bold">SweMovies</h3>
                <ul className="flex gap-2 sm:gap-6">
                    <li className="text-[12px] text-white sm:text-[16px] font-bold">Home</li>
                    <li className="text-[12px] text-white sm:text-[16px] font-bold">Movies</li>
                    <li className="text-[12px] text-white sm:text-[16px] font-bold">Tv Shows</li>
                    <li className="text-[12px] text-white sm:text-[16px] font-bold">Blog</li>
                    <li className="text-[12px] text-white sm:text-[16px] font-bold">Pricing</li>
                    <li className="text-[12px] text-white sm:text-[16px] font-bold">Contact</li>
                </ul>
            </div>
            <div className="w-[75%] h-[0.1px] bg-gray-400 m-auto"></div>
            <p className=" text-[10px] sm:text-[12px] py-10 text-center text-white">Copyright © 2022. All Rights Reserved By Emad Mhardawi</p>
        </div>
    )
}


export default Footer;


