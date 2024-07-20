'use client'
import { useState } from "react";
import Input from "../inputs/input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../components/Button";
import Link from "next/link";
import {AiOutlineGoogle} from 'react-icons/ai'



const LoginForm = () => {
    const [isLoading,setisLoading]=useState(false)
    const{register,handleSubmit,formState:{errors}}=useForm<FieldValues>({
        defaultValues:{
            
            email:'',
            password:''


        }
    })
const onSubmit:SubmitHandler<FieldValues> = (data)=>{
    setisLoading(true)
}

    return ( 
        <>
        <div className="flex-shrink-0 ">
        <img className="block lg:hidden h-8 w-auto "
                src="/images/JGJ.jpg"
                alt="Logo"/>
        <img
            className="hidden lg:block h-8 w-auto "
            src="/images/JGJ.jpg"
            alt="Logo"
              />
         </div>
        <h1  className="font-extrabold">Create Your Account</h1>
        <h3>Please fill in details to get started</h3>
        <Button outline
        label="Sign up with Google"
        icon={AiOutlineGoogle}
        onClick={()=>{}}/>
        <hr className="bg-white w-full h-px"/>
        
         <Input 
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        />
         <Input 
        id="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="password"
        />
        <Button 
        label={isLoading? 'Loading':'Sign Up'} onClick={handleSubmit(onSubmit)}
        />
        <p className="text-sm ">Do not have an account?
            <Link className="underline" href={'/register'}>
            Sign Up
            </Link>
        </p>
        </>
     );
}
 
export default LoginForm;