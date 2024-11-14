import { Link } from "react-router-dom";
import Callback from "./Callback";
import { useState } from "react";
import FormTest from "./FormTest";
import RecursiveListTest from "./RecursiveListTest";

function HomeCta() {
  const [boxColor, setBoxColor] = useState("");
  const [usersFromApi, setUsersFromApi] = useState([]);

  const handleColor = (color: string) => {
    setBoxColor(color);
  };

  // API Calls and handling error responses
  const fetchColors = async () => {
    const res = await fetch("https://abc.com/api/colors");
    const response = await res.json();

    // the status is on the initial res response not on res.json so thats why we dont use response.ok here
    if (!res.ok) {
      if (response.status === 404) throw new Error("Api not found");
    }

    return response.data;
  };

  //POST API

  const postColors = async () => {
    const dummyPayload = {
      color: "blue",
      code: "#0000FF",
    };

    const res = await fetch("https://abc.com/api/colors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dummyPayload),
    });

    if (!res.ok) throw new Error("API error");

    const response = await res.json();
    setUsersFromApi(response);
    return response;
  };

  return (
    <div className='cta-section mb-16 px-4'>
      <h2 className='mb-2 text-lg md:text-3xl'>Quality doesn't need to wait</h2>
      <p>Our collection is crafted using the finest materials.</p>
      <Link className='button-main mt-4' to={"/products/living-room"}>
        Find out more
      </Link>
      {usersFromApi.map((user) => {
        return <p key={user.id}>{user.name}</p>;
      })}
      <div className='h-20 w-20' style={{ backgroundColor: `${boxColor}` }}>
        Color change
      </div>
      <Callback handleColor={handleColor} />
      <FormTest />
      <RecursiveListTest />
    </div>
  );
}

export default HomeCta;
