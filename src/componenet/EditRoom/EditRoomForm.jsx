'use client'
import { authClient } from '@/lib/auth-client';
import { Check } from '@gravity-ui/icons';
import { Button, Description, FieldError, Form, Input, Label, TextArea, TextField } from '@heroui/react';
import React, { useState } from 'react';
import { Bounce, toast } from 'react-toastify';
import AmenitiesForm from '../AddRoom/AmenitiesForm';
import LoadingPage from '@/app/loading';

const EditRoomForm = ({room}) => {
      
    console.log(room);
  //console.log(`${process.env.NEXT_PUBLIC_BACKEND_URI}/rooms`, "URRRLRLRLRL");
   const [amenities, setAmenities] = useState([]);
    const { data: session, isPending } =  authClient.useSession();
    console.log(session?.user);
    const name = session?.user?.name;
    const user_id = session?.user?.id;

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
        user_id: session?.user?.id,
        room_id: room?._id
    }
    console.log(roomData, "roomdata");

     const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/rooms/${room?._id}/edit/`, {
        method: "PATCH",
      headers: {
        'content-type' : 'application/json'
      },
      body:JSON.stringify(roomData)
    })
    const data_result = await res.json();
    console.log(data_result, "data");
        if(data_result.success){
                 setLoading(false);
                //alert(error.message);
                  toast.success('🦄 Room Successfully Updated!', {
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
        window.location.reload();
    }
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
                     onClose: () => {
        window.location.reload();
    }
                });
                // router.refresh();
            }

    // data will look like: { name: "John Doe", email: "john@example.com" }

    setLoading(false);
     //router.refresh();
  };
     if (loading) {
        return (
          <LoadingPage/>
        );
      }
      
    return (
        <div className='flex items-center justify-center h-screen bg-base-200'>
      <div className="bg-base-100 py-5 px-5 rounded-md shadow-md">
        <p className='py-4'>You are editing room as <span className='text-primary underline'>{name}</span></p>
        <h1 className='text-xl text-primary border-b mb-4 border-primary'>Edit Room</h1>
                  <Form className="flex w-5xl flex-col gap-4" onSubmit={handleSubmit} >

      <TextField
            isRequired
            name="room_name"
            type="text"
            defaultValue={room?.room_name}
          >

        <Label>Room Name</Label>
        <Input placeholder="Enter Name" />
        <FieldError />
      </TextField >

         <TextField
            isRequired
            name="description"
            type="text"
              defaultValue={room?.description}
          >

        <Label>Room Description</Label>
        <TextArea />
        <FieldError />
      </TextField >

        <TextField
            isRequired
            name="image"
            type="url"
              defaultValue={room?.image}
          >

        <Label>Image (url)</Label>
        <Input placeholder="image url" />
        <FieldError />
      </TextField >

        <TextField
            isRequired
            name="floor"
            type="number"
              defaultValue={room?.floor}
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
              defaultValue={room?.capacity}
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
              defaultValue={room?.hourly_rate}
          >

        <Label>Hourly Rate (USD)</Label>
        <Input placeholder="" />
        <Description>Example: 10</Description>
        <FieldError />
      </TextField >
       <AmenitiesForm defaultamenities={room?.amenities} setAmenities={setAmenities} />
     
      <div className="flex gap-2">
        <Button className={`bg-blue-500`} type="submit">
          <Check />
          Edit Room
        </Button>
      </div>
    </Form>

         
  
      </div>

    </div>
    );
};

export default EditRoomForm;