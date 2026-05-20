'use client'
import LoadingPage from '@/app/loading';
import AmenitiesForm from '@/componenet/AddRoom/AmenitiesForm';
import CheckboxGroupst from '@/componenet/AddRoom/CheckboxGroup';
import { NewCheckGroup } from '@/componenet/AddRoom/NewCheckGroup';
import { authClient } from '@/lib/auth-client';
import { Check } from '@gravity-ui/icons';
import { Button, Checkbox, CheckboxGroup, Description, FieldError, Form, Input, Label, TextArea, TextField } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { redirect, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { Bounce, toast } from 'react-toastify';

const page = () => {
      const router = useRouter();
      console.log(`${process.env.NEXT_PUBLIC_BACKEND_URI}/rooms`, "URRRLRLRLRL");
   const [amenities, setAmenities] = useState([]);
    const { data: session, isPending } =  authClient.useSession();
    console.log(session?.user);
    const name = session?.user?.name;


        const [loading, setLoading] = useState(false);
// Your custom submit handler
  const handleSubmit = async(event) => {
   // console.log(event.target);
    // 1. Prevent the browser from reloading the page
    event.preventDefault();
                setLoading(true);


    // 2. Extract data directly from the form elements using their "name" attributes
    const formData = new FormData(event.currentTarget);
    const dsdasdasda = Object.fromEntries(formData.entries());
        //console.table(dsdasdasda);
    const {room_name, description, image,floor,capacity,hourly_rate,} = dsdasdasda;
    //console.table(dsdasdasda);
    //console.log(amenities);
    const roomData = {
        room_name,
        description,
        image,
        floor,
        capacity,
        hourly_rate,
        amenities,
        user_id: session?.user?.id
    }
    console.log(roomData, "roomdata");

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/rooms`, {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body:JSON.stringify(roomData)
    })
    const data_result = await res.json();
    console.log(data_result, "data");
        if(data_result.insertedId){
                 setLoading(false);
                //alert(error.message);
                  toast.success('🦄 Room Successfully added!', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                    onClose: () => {
                     router.push('/MyListing');
                        // e.g. redirect, trigger API, update state
                    },
                });

               
      }
          else{
                 setLoading(false);
                 toast.error(`Something Went Wrong`, {
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

    // data will look like: { name: "John Doe", email: "john@example.com" }

    setLoading(false);
  };
     if (loading) {
        return (
          <LoadingPage/>
        );
      }
      
    return (
        <div className='flex items-center justify-center h-screen bg-base-200'>
      <div className="bg-base-100 py-5 px-5 rounded-md shadow-md">
        <p className='py-4'>You are adding room as <span className='text-primary underline'>{name}</span></p>
        <h1 className='text-xl text-primary border-b mb-4 border-primary'>Add A Room</h1>
                  <Form className="flex w-5xl flex-col gap-4" onSubmit={handleSubmit} >

      <TextField
            isRequired
            name="room_name"
            type="text"
          >

        <Label>Room Name</Label>
        <Input placeholder="Enter Name" />
        <FieldError />
      </TextField >

         <TextField
            isRequired
            name="description"
            type="text"
          >

        <Label>Room Description</Label>
        <TextArea />
        <FieldError />
      </TextField >

        <TextField
            isRequired
            name="image"
            type="url"
          >

        <Label>Image (url)</Label>
        <Input placeholder="image url" />
        <FieldError />
      </TextField >

        <TextField
            isRequired
            name="floor"
            type="number"
          >

        <Label>Floor</Label>
        <Input placeholder="" />
        <Description>Example: 3</Description>
        <FieldError />
      </TextField >


            <TextField
            isRequired
            name="capacity"
            type="number"
          >

        <Label>Capacity</Label>
        <Input placeholder="" />
        <Description>Number of person</Description>
        <FieldError />
      </TextField >

       <TextField
            isRequired
            name="hourly_rate"
            type="number"
          >

        <Label>Hourly Rate (USD)</Label>
        <Input placeholder="" />
        <Description>Example: 10</Description>
        <FieldError />
      </TextField >
       <AmenitiesForm setAmenities={setAmenities} />
     
      <div className="flex gap-2">
        <Button className={`bg-blue-500`} type="submit">
          <Check />
          Add Room
        </Button>
      </div>
    </Form>

         
  
      </div>

    </div>
    );
};

export default page;