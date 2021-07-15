import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Userz from "./User";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function App() {
  const [users, setUsers] = useState("");
  const [click, setClick] = useState(false);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
   
    axios("https://reqres.in/api/users?page=2")
      .then((res) => {
        setUsers(res.data.data);
        // console.log(res.data.data);
       
      })
      .catch((err) => console.log(err));
  }, []);

  // console.log(users);

  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <h1>Brand Name</h1>
        </div>
        <div className="getDetails">
          <button
            onClick={() => {
              setClick(true);
              setLoading(!loading);
            }}
          >
            Get Users
          </button>
        </div>
      </header>

      {click ? (
        <div className="userContainer">
          <ClipLoader loading={loading} css={override} size={150} />
          {users &&
            users.map((user, id) => {
              // console.log(user.id);
              return <Userz data={user} key={id} />;
            })}
        </div>
      ) : (
        <div className="splace">
          <div
            className="preBox"
            onClick={() => {
              setClick(true);
              setLoading(!loading);
            }}
          >
            <h1>CLICK ME</h1>
          </div>
        </div>
      )}
      {/* <User user={users} />; */}
    </div>
  );
}

export default App;
