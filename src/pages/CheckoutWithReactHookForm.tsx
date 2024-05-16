import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import CartPaymentSummary from "../components/CartPaymentSummary";
import { CiLock } from "react-icons/ci";
import { Link } from "react-router-dom";

function CheckoutWithReactHookForm() {
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

  const onSubmit = async (data: FieldValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    reset();
  };

  return (
    <>
      <div className='checkout-page px-2 bg-gray-100 w-full min-h-screen'>
        <div className='shipping-form'>
          <Link to={"/"} className='checkout-logo'>
            <h1>ILS</h1>
          </Link>

          <h1>Checkout</h1>
          <div className='form-container'>
            <h2 className='uppercase self-start'>Ship to:</h2>
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
                      required: "Name is required",
                    })}
                    type='text'
                    name='firstName'
                    className={`border ${
                      errors.firstName ? "border-red-500" : "border-gray-500"
                    } `}
                  />
                  {errors.firstName && (
                    <div className='error-message text-red-500'>{`${errors.firstName.message}`}</div>
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
                    type='text'
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
                    name='phone'
                    type='text'
                    className={`border w-full ${
                      errors.city ? "border-red-500" : "border-gray-500"
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
                Submit
              </button>
            </form>
          </div>
          <div className='mt-10 self-start'>
            <CiLock />
            <p>
              Secure Checkout <br /> Shopping is always safe and secure
            </p>
          </div>
        </div>
        <div className='checkout-summary px-7 py-10'>
          <CartPaymentSummary />
        </div>
      </div>
    </>
  );
}

export default CheckoutWithReactHookForm;
