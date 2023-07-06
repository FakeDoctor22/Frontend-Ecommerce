import React from 'react'
import { useFormAction } from 'react-router-dom';
import { MdOutlineEmail } from 'react-icons/md';
import { MdPhoneInTalk } from 'react-icons/md';


const {
  control,
  handleSubmit,
  formState:{errors}, 
} = useFormAction ({
  defaultValues: {
    name:  '',
    email: '',
    message: '',
  }
})

const Contact = () => {
  return (
    <div className="x1:container mx-auto mb-32">
      <div
        className="flex justify-center"
        style={{
          background: 'gradient-to-bl from-yellow-200 via-emerald-600 to-teal-300',
          height: '250px',
        }}
    >
        <h1 className="text-5x1 sm:text-7x1 text-white uppercase pt-12">Contact us</h1>
    </div>
    <div className="px-4 sm:w-2/3 1g:w-1/2 mx-auto">
      <div className="rounded-1g shadow-1g bg-white -mt-24 py-10 md:py-12 px-4 md:px-6"></div>
        <div className="grid grid-cols-2 gap-x-6 mb-12 mx-auto">
        <MdOutlineEmail icon={<MdOutlineEmail />} text="EMAIL@gmail.com" />
        <MdPhoneInTalk Icon={<MdOutlineEmail />} text="09709187375" />
        </div>
        <div>
          <form>
            <controller
                name="name"
                control={control}
                rules={{required: true}}
                render={({field}) => (
                  <FormElement 
                  type="text" 
                  label="name" 
                  placeholder="Enter name here..." 
                  fieldRef={field} 
                  hasError={errors.name?.type ==='required'}
            />
          )}
        />
          </form>
        </div>
    </div>
  </div>
  );
}

export default Contact