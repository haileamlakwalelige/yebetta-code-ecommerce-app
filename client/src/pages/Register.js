/* eslint-disable jsx-a11y/heading-has-content */
import React,{useState} from 'react';
import {TbHexagonLetterM} from 'react-icons/tb';
// import {PiHandWavingBold} from 'react-icons/pi';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import {ImCheckboxUnchecked} from 'react-icons/im';
import {FaFacebook, FaTwitter, FaGithub, FaGoogle} from 'react-icons/fa';
 

const Register=()=>{
    const [pass, setPass]=useState(false);
    return(
        <div className="bg-white flex justify-center items-center">
          <div className="flex flex-col pt-0 bg-white shadow-2xl mt-4 sm:mt-20 w-11/12 lg:w-5/12 h-5/6 lg:h-[600px] ">
            <div className="flex justify-center pt-10 pb-6">
                <TbHexagonLetterM size={40} className='pr-2 text-purple-800'/>
                <h1 className="font-bold text-2xl text-gray-700">Materio</h1>
            </div>
            <div className="lg:pl-24 md:pl-5 sm:pl-2 justify-center sm:justify-start flex">
                <h1 className='font-semibold text-3xl pl-2 text-gray-700'>Adventure Start Here</h1>

                {/* <PiHandWavingBold /> */}
            </div>
            <p className="lg:pl-24 font-serif md:pl-12 pl-3 sm:pl-6 justify-center sm:justify-start text-gray-400">Make your app management easy and fun.</p>
            <div className="lg:pl-24 font-serif md:pl-12 mr-10 md:mr-32 sm:pl-6 pl-3 flex flex-col items-center justify-center md:justify-start text-gray-700 py-4 ">
            <input type="email" placeholder="Username" 
                    className='py-1 border-gray-200 placeholder:pl-2 border-2 rounded w-full my-2 '
                />
                <input type="email" placeholder="Email" 
                    className='py-1 border-gray-200 placeholder:pl-2 border-2 rounded w-full my-2 '
                />
                <div className='py-1 border-gray-200 px-2 placeholder:pl-2 border-2 rounded w-full my-2 flex justify-between '>
                    <input type="password" placeholder="password"    
                    />
                    <div onClick={()=>setPass(!pass)}>
                    {pass ? <AiOutlineEyeInvisible size={23} className='text-gray-700'/>:<AiOutlineEye size={23} className='text-gray-700'/>}
                    </div>
                </div>
                
            </div>
            <div className='mt-[-10px] lg:pl-24 font-serif md:pl-12 md:mr-32 mr-10 sm:pl-6 pl-3 justify-center sm:justify-start text-gray-700'>
               <div className='flex justify-between '>
               <div className='flex pl-2'>
                    <ImCheckboxUnchecked size={25} className='pr-2'/>
                    <h1>I Agree to private policy & terms.</h1>
                </div>
               </div>
            </div>
            <div className="md:mr-[220px] flex justify-center ml-20 mr-32 py-3">
            <button className='rounded text-center w-full p-1 lg:ml-24 font-serif md:ml-6 sm:ml-3 justify-center sm:justify-start text-white bg-purple-700'>REGISTER</button>
            </div>
            <div className='lg:pl-24 flex py-3  font-serif md:pl-6 sm:pl-3 md:justify-between lg:justify-start px-4 justify-center text-gray-400'>
                <h1 className="md:pr-3 pr-1 pl-1 md:pl-3">Already have an account ?</h1>
                <h1 className="text-purple-800">Sign up instead</h1>
            </div>
            <div className="flex justify-center py-3 text-gray-500 font-bold">
                <h1>or</h1>
            </div>
            <div className="flex justify-center py-5">
                <FaFacebook className='mx-2 text-blue-800' size={17}/>
                <FaTwitter className='mx-2 text-blue-500' size={17}/>
                <FaGithub className='mx-2' size={17}/>
                <FaGoogle className='mx-2 text-red-500' size={17}/>
            </div>
          </div>
        </div>
    );
}

export default Register;