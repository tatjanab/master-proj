import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";

type FormFields = {
  firstName: string;
  lastName: string;
  address: string;
  zipCode: string;
  city: string;
  phone: number;
  email: string;
};

function CheckoutForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  // onSubmit is just a typical name of the function we pass to handleSubmit that is destructured from useForm
  // useForm from react hook form automatically does prevent default, we dont need to do it
  // isSubmitting, reset, everything is coming from react hook forms
  // need to add the noValidate attr to the form to disable the natve browser validation

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("submitting");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className='flex flex-col gap-y-2 mt-3'
    >
      <div className='input-row'>
        <div className='input-item'>
          <label htmlFor='firstName'>First Name</label>
          <input
            {...register("firstName", {
              required: "First name is required",
            })}
            type='text'
            name='firstName'
            className={`border ${
              errors.firstName ? "border-red-500" : "border-gray-500"
            } `}
          />
          {errors.firstName && (
            <div className='error-message text-red-500'>
              {`${errors.firstName?.message}`}
            </div>
          )}
        </div>
        <div className='input-item'>
          <label htmlFor='lastName'>Last Name</label>
          <input
            {...register("lastName", {
              required: "Last name is required",
            })}
            name='lastName'
            type='text'
            className={`border ${
              errors.lastName ? "border-red-500" : "border-gray-500"
            } `}
          />
          {errors.lastName && (
            <div className='error-message text-red-500'>{`${errors.lastName.message}`}</div>
          )}
        </div>
      </div>
      <div className='input-row w-full'>
        <div className='input-item'>
          <label htmlFor='address'>Street address</label>
          <input
            {...register("address", {
              required: "Street address is required",
            })}
            name='address'
            type='text'
            className={`border w-full ${
              errors.address ? "border-red-500" : "border-gray-500"
            } `}
          />
          {errors.address && (
            <div className='error-message text-red-500'>{`${errors.address.message}`}</div>
          )}
        </div>
      </div>
      <div className='input-row'>
        <div className='input-item'>
          <label htmlFor='zipCode'>Zip code</label>
          <input
            {...register("zipCode", {
              required: "Zip code is required",
              minLength: {
                value: 5,
                message: "Zip code must be at least 5 characters long",
              },
            })}
            name='zipCode'
            type='text'
            className={`border w-full ${
              errors.zipCode ? "border-red-500" : "border-gray-500"
            } `}
          />
          {errors.zipCode && (
            <div className='error-message text-red-500'>{`${errors.zipCode.message}`}</div>
          )}
        </div>
        <div className='input-item'>
          <label htmlFor='city'>City</label>
          <input
            {...register("city", {
              required: "City is required",
            })}
            name='city'
            type='text'
            className={`border ${
              errors.city ? "border-red-500" : "border-gray-500"
            } `}
          />
          {errors.city && (
            <div className='error-message text-red-500'>{`${errors.city.message}`}</div>
          )}
        </div>
      </div>
      <div className='input-row'>
        <div className='input-item'>
          <label htmlFor='phone'>Phone number</label>
          <input
            {...register("phone", {
              required: "Phone number is required",
            })}
            name='phone'
            type='number'
            className={`border w-full ${
              errors.phone ? "border-red-500" : "border-gray-500"
            } `}
          />
          {errors.phone && (
            <div className='error-message text-red-500'>{`${errors.phone.message}`}</div>
          )}
        </div>
      </div>
      <div className='input-row'>
        <div className='input-item'>
          <label htmlFor='email'>Email address</label>
          <input
            {...register("email", {
              required: "Email address is required",
            })}
            name='email'
            type='text'
            className={`border w-full ${
              errors.email ? "border-red-500" : "border-gray-500"
            } `}
          />
          {errors.email && (
            <div className='error-message text-red-500'>{`${errors.email.message}`}</div>
          )}
        </div>
      </div>

      <button
        disabled={isSubmitting}
        type='submit'
        className='button-main thin disabled:bg-slate-200 disabled:text-black mt-5'
      >
        {isSubmitting ? "Loading..." : "Submit"}
      </button>
    </form>
  );
}

export default CheckoutForm;
