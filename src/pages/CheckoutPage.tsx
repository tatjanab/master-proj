import { useState } from "react";
import { Form, useForm } from "react-hook-form";
import Header from "../components/Header";

type FormFields = {
  name: string;
  email: string;
  address: string;
};

function CheckoutPage() {
  // we register the fields to the form, when they change values, that value is
  const { register } = useForm<FormFields>();

  return (
    <>
      <Header />
      <div className='px-7 pt-5 bg-gray-100 w-full min-h-screen flex flex-row'>
        <div className='shipping-form mr-4'>
          <form noValidate className='flex flex-col gap-y-2'>
            <input
              {...register("name")}
              placeholder='Name'
              className='p-2'
              type='text'
              required
            />
            <input
              {...register("email")}
              placeholder='Email address'
              className='p-2'
              type='email'
              required
            />
            <input
              {...register("address")}
              placeholder='Address'
              className='p-2'
              type='text'
              required
            />
            <button
              type='submit'
              className='button-main inverted disabled:bg-slate-50'
            >
              Submit
            </button>
          </form>
        </div>
        {/* <CartPaymentSummary /> */}
      </div>
    </>
  );
}

export default CheckoutPage;
