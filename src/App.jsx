/* eslint-disable react/react-in-jsx-scope */

import { useState } from "react";
import "./App.css";
import { MessageBox } from "./components/MessageBox";
import info from "../src/UsersData";

function App() {
  const [data, setData] = useState(info);
  const clickHandler = () => {
    setData(data.map((user) => ({ ...user, read: true })));
  };

  const readHandler = (index) => {
    setData(
      data.map((message, iterate) =>
        iterate === index ? { ...message, read: true } : message
      )
    );
  };
  return (
    <>
      <div className="font-plus bg-white p-5 md:w-150 w-90 rounded-sm mx-auto shadow-xs shadow-gray-200">
        <div className="flex justify-between items-center  mb-5">
          <div className="flex gap-2 items-center">
            <h5 className="text-slate-800 font-bold">Notifications</h5>
            <div className="flex justify-center items-center w-5 h-4 text-xs rounded-md  bg-slate-700 text-white">
              {data.filter((user) => !user.read).length}
            </div>
          </div>
          <p
            onClick={clickHandler}
            className="text-slate-500 text-xs cursor-pointer hover:text-slate-950"
          >
            {" "}
            Mark as all read
          </p>
        </div>
        <MessageBox data={data} readHandler={readHandler} />
      </div>
    </>
  );
}

export default App;
