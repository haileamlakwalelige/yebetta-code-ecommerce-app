/* eslint-disable jsx-a11y/heading-has-content */
import React,{useState} from 'react';
import {TbHexagonLetterM} from 'react-icons/tb';
import {PiHandWavingBold} from 'react-icons/pi';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import {ImCheckboxUnchecked} from 'react-icons/im';
import {FaFacebook, FaTwitter, FaGithub, FaGoogle} from 'react-icons/fa';
 

const Login=()=>{
    const [pass, setPass]=useState(false);
    return(
        <div>
          <div className="flex flex-col justify-center items-center">
            <div>
                <TbHexagonLetterM />
                <h1>Materio</h1>
            </div>
            <div>
                <h1>Welcome to Materialize </h1>
                <PiHandWavingBold />
            </div>
            <div>
                <input type="email" placeholder="Email" />
                <div>
                    <input type="password" placeholder="password" />
                    <div onClick={()=>setPass(!pass)}>
                    {pass ? <AiOutlineEyeInvisible />:<AiOutlineEye />}
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <ImCheckboxUnchecked />
                    <h1>Remember Me</h1>
                </div>
                <h1>Forget Password ?</h1>
            </div>
            <button>LOGIN</button>
            <div>
                <h1>New to our platform ?</h1>
                <h1>Create an account.</h1>
            </div>
            <div>
                <h1></h1>
                <h1>or</h1>
                <h1></h1>
            </div>
            <div>
                <FaFacebook />
                <FaTwitter />
                <FaGithub />
                <FaGoogle />
            </div>
          </div>
        </div>
    );
}

export default Login;