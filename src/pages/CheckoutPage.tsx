import { useState } from "react";
import Header from "../components/Header";

function CheckoutPage() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (name.length <= 1 || address.length <= 1) {
      setErrors(["Please input the full name and address"]);
      setIsSubmitting(false);

      console.log(errors);
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("name " + name);

    setIsSubmitting(false);

    // TODO: submitting the form and add the state to false once its submitted
  };

  return (
    <>
      <Header />
      <div className='px-7 pt-5 bg-gray-100 w-full min-h-screen flex flex-row'>
        <div className='shipping-form mr-4'>
          <form
            onSubmit={handleSubmit}
            noValidate
            className='flex flex-col gap-y-2'
          >
            {errors.length > 0 && (
              <ul>
                {errors.map((error) => (
                  <li key={error} className='bg-red-100 text-red-500 py-2'>
                    {error}
                  </li>
                ))}
              </ul>
            )}
            <input
              value={name}
              placeholder='Name'
              className='p-2'
              type='text'
              required
              onChange={(e) => setName(e.target.value)}
            />
            <input
              value={email}
              placeholder='Email address'
              className='p-2'
              type='email'
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              value={address}
              placeholder='Address'
              className='p-2'
              type='text'
              required
              onChange={(e) => setAddress(e.target.value)}
            />
            <button
              type='submit'
              disabled={isSubmitting}
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
