import React, { useEffect, useState } from 'react'
import style from './Login.module.css'
import { Typography, TextField } from '@mui/material'
import { FcGoogle } from 'react-icons/fc'
import { BsApple } from 'react-icons/bs'
import { TfiTwitterAlt } from 'react-icons/tfi'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

export default function Login() {

    const navigate = useNavigate()

    const [userData, setUserData] = useState()

    useEffect(()=>{
        localStorage.setItem('value', userData)
    },[userData])


    function getData(e){
        e.preventDefault()
        const data = localStorage.getItem('user')
        console.log(data)
        if(data== userData){
            navigate('/home')
        }
        else{
            alert("fill the form correctly")
        }
    }

    return (
        <div className={style.container}>
            <div className={style.twitter_icon}>
                <TfiTwitterAlt />
            </div>
            <div className={style.inner_container}>
                <Typography component="h1" variant="h5" style={{ margin: 'auto' }}>
                    Sign In To Twitter
                </Typography>

                <div onClick={()=>alert('clicked')} className={style.sign_container}>
                    <div className={style.google}>
                        <span className={style.icon}><FcGoogle /></span>
                        <span>Sign in with Google</span>
                    </div>
                </div>

                <div className={style.sign_container}>
                    <div className={style.google}>
                        <span className={style.icon}><BsApple /></span>
                        <span style={{ fontSize: '18px' }}>Sign in with Apple</span>
                    </div>
                </div>

                <form >
                    <TextField id="outlined-basic"
                        label="Phone, UserName or Email"
                        variant="outlined"
                        style={{ width: '25vw', margin: '30px 0px' }}
                        onChange={(e)=>setUserData(e.target.value)}
                    />
                    <button className={style.btn} onClick={getData}>
                        Next
                    </button>

                    <div className={style.sign_container}>
                        <div className={style.google}>
                            <span style={{ fontSize: '18px' }}>Forgot password?</span>
                        </div>
                    </div>
                </form>

            </div>
            <div className={style.signUp}>
                <div className={style.space}>
                    <span>Don't have an account? </span>
                    <span><Link to='/signup'>SignUp</Link></span>
                </div>
            </div>
        </div>
    )
}


