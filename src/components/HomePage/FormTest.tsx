import { useState } from "react";

function FormTest() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [userInfo, setUserInfo] = useState({ user: "", email: "" });

  const handleUser = (e) => {
    setUser(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInfoObj = {
      ...userInfo,
      user: user,
      email: email,
    };

    setUserInfo(userInfoObj);

    console.log(userInfoObj);
  };

  return (
    <div className='mt-10'>
      {userInfo.user && <p className='text-black'>Hello {userInfo.user}</p>}
      <form onSubmit={handleSubmit}>
        <div className='mb-5 flex flex-col text-black'>
          <label htmlFor='username'>Username</label>
          <input
            name='username'
            id='username'
            value={user}
            onChange={handleUser}
          />
        </div>
        <div className='mb-5 flex flex-col text-black'>
          <label htmlFor='email'>Email</label>
          <input name='email' id='email' value={email} onChange={handleEmail} />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default FormTest;
