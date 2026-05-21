
'use client'
import LoadingPage from '@/app/loading';
import GoogleLoginButton from '@/componenet/shared/GoogleLoginButton';
import { authClient } from '@/lib/auth-client';
import { Check } from '@gravity-ui/icons';
import { Button, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { Bounce, toast } from 'react-toastify';
const loginpage = () => {
    const [loading, setLoading] = useState(false);
    const handle_submit_login = async(event) => {
            // 1. Prevent the browser from reloading the page
    event.preventDefault();
                setLoading(true);
                 const formData = new FormData(event.currentTarget);
    const {email, password} = Object.fromEntries(formData.entries());
            console.log(email+password);
            const {data:res, error} = await authClient.signIn.email({
                email : email,
                password : password,
                rememberMe: true,
                callbackURL: "/",
            });
            if(error){
                 setLoading(false);
                //alert(error.message);
                   toast.error(`${error.message}`, {
                                    position: "top-center",
                                    autoClose: 2500,
                                    hideProgressBar: false,
                                    closeOnClick: false,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "light",
                                    transition: Bounce,
                                });
            }
            if(res){
                   setLoading(false);
                    toast.success('🦄 Login Successful!', {
                    position: "top-center",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            }

    }
        if (loading) {
    return (
      <LoadingPage/>
    );
  }
    return (
        <div>
              <div className='flex items-center justify-center h-screen bg-base-200'>
      <div className="bg-base-100 py-5 px-5 rounded-md shadow-md">
        <div className="pb-10 mx-auto flex justify-center">
          <Link href="/">  <Image src="/log.png" width={200} height={100} alt="logo" /></Link>
              
        </div> 
                  <Form className="flex w-96 flex-col gap-4" onSubmit={handle_submit_login} >
      <TextField className={`w-full`}
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <Label>Email</Label>
        <Input placeholder="john@example.com" />
        <FieldError />
      </TextField>
      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
        <FieldError />
      </TextField>
      <div className="flex gap-2">
        <Button type="submit" className="w-full bg-blue-600">
          <Check />
          Log in
        </Button>
      </div>
    </Form>
    <GoogleLoginButton setLoading={setLoading} />
     <div className="flex flex-col mt-5 gap-2 justify-center  text-primary"><Link className="underline" href="/Signup">Dont't have an account? SignUp</Link>
            <Link className="underline text-right flex items-center justify-end gap-2" href="/"> <FaHome/>Home</Link>
            </div>
      
          </div>
    
        </div>
        </div>
    );
};

export default loginpage;