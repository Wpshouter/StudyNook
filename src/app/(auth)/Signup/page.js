'use client'
import LoadingPage from "@/app/loading";
import GoogleLoginButton from "@/componenet/shared/GoogleLoginButton";
import { authClient } from "@/lib/auth-client";
import {Check} from "@gravity-ui/icons";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useState } from 'react';
import { FaHome } from "react-icons/fa";
import { Bounce, toast } from "react-toastify";

const signup = () => {
    const [loading, setLoading] = useState(false);
// Your custom submit handler
  const handleSubmit = async(event) => {
    
    // 1. Prevent the browser from reloading the page
    event.preventDefault();
                setLoading(true);


    // 2. Extract data directly from the form elements using their "name" attributes
    const formData = new FormData(event.currentTarget);
    const {name, email, photo_url, password} = Object.fromEntries(formData.entries());

    console.log("Form Submitted Data:", name + email +photo_url+password);
      const {data:res, error} = await authClient.signUp.email({
                name: name,
                email: email,
                password: password,
                image: photo_url,
                callbackURL: "/"
      })
      console.log(res, error);
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
                toast.success('🦄 Registration Done! Redirecting....', {
                    position: "top-center",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                    onClose: () => {
                        redirect('/Login');
                        // e.g. redirect, trigger API, update state
                    },
                });
            }

    // data will look like: { name: "John Doe", email: "john@example.com" }
  };
     if (loading) {
        return (
          <LoadingPage/>
        );
      }

  return (
    <div className='flex items-center justify-center h-screen bg-base-200 w-full px-5'>
      <div className="bg-base-100 py-5 px-5 rounded-md shadow-md">
        <div className="pb-10 mx-auto flex justify-center">
           <Link href="/"><Image src="/studyNook.png" width={200} height={100} /></Link>
              
        </div>
                  <Form className="flex flex-col gap-4" onSubmit={handleSubmit} >
                          <TextField
        isRequired
        name="name"
        type="text"
      >
        <Label>Name</Label>
        <Input placeholder="Your Name" />
        <FieldError />
      </TextField>

      <TextField
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
        
        name="photo_url"
        type="url"
      >
        <Label>Photo Url</Label>
        <Input placeholder="Url" />
        <FieldError />
      </TextField>


      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 6) {
            return "Password must be at least 6 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[a-z]/.test(value)) {
            return "Password must contain at least one lowercase letter";
          }
          return null;
        }}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <Description>Must be at least 8 characters with 1 uppercase and 1 lowercase</Description>
        <FieldError />
      </TextField>
      <div className="flex gap-2">
        <Button className={`bg-blue-500 w-full` } type="submit">
          
          <Check />
          Register
        </Button>
      </div>
    </Form>
            <GoogleLoginButton setLoading={setLoading} />
          <div className="flex flex-col mt-5 gap-2 justify-center  text-primary"><Link className="underline" href="/Login">Already have an account? Login</Link>
            <Link className="underline text-right flex items-center justify-end gap-2" href="/"> <FaHome/>Home</Link>
            </div>
  
      </div>

    </div>
  );
};

export default signup;