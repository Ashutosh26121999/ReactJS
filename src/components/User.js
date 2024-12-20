import React, {useState} from "react";

function User(props) {
  const [name, setName] = useState("Function Componenet");
  const [count, setCount] = useState(0);

  return (
    <div className='user_card'>
      <p>
        Componenet Name:{name}, Count:{count}
      </p>
      <h5>Name:{props.name}</h5>
      <h5>Varanasi</h5>
      <h6>India</h6>
      <h6>React Developer</h6>
    </div>
  );
}

export default User;
