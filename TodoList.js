import React, { useState } from "react";
import Todo from "./img/todo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faSquarePen } from "@fortawesome/free-solid-svg-icons";

const TodoList = () => {
  const [input, setInput] = useState("");

  const InputHandler = (event) => {
    setInput(event.target.value);
  };

  const [item, setItem] = useState([]);

  const addItem = () => {
    if (!input) {
    } else {
      setItem([...item, input]);
      setInput("");
    }
  };

  const deleteItem = (id) => {
    const updateItems = item.filter((elem, index) => {
      return index !== id;
    });
    setItem(updateItems);
  };

  const removeHandeler = () => {
    setItem([]);
  };

  const updateitem = () =>{
    setItem(item.id)
  } 
  return (
    <>
      <div className="bg-neutral-600  h-screen flex justify-center  items-center  ">
        <div className="bg-gray-200 w-fit  border-2 border-black h-fit rounded-lg shadow-black shadow-lg  ">
          <div className="flex justify-center  flex-col my-10 mx-9 items-center">
            <img
              className="w-28 flex justify-center align-middle"
              src={Todo}
            ></img>
            <figcaption className="text-slate-600">
              Add your List Here
            </figcaption>
          </div>

          <div className="flex flex-row  mx-10">
            <input
              className=" w-auto border-2 text-black"
              type="text"
              placeholder="Add Items"
              value={input}
              onChange={InputHandler}
            ></input>
            <FontAwesomeIcon
              className="my-1  "
              icon={faPlus}
              onClick={addItem}
            />
          </div>

          <div className="text-slate-900 my-8 flex justify-center align-middle flex-col py-2 mx-10 items-center">
            {item.map((elem, index) => {
              return (
                <>
                  <div className="flex  flex-row " key={index}>
                    {elem}
                    <FontAwesomeIcon
                      className="my-1 px-5"
                      icon={faTrash}
                      onClick={() => deleteItem(index)}
                    />
                    <FontAwesomeIcon className="items-center flex justify-center my-1" icon={faSquarePen}  onClick={updateitem}/>
                  </div>
                </>
              );
            })}
          </div>
          <div className=" flex justify-center items-center border-black  border-2 my-3 ">
            <button className=" w-fit " onClick={removeHandeler}>
              <span>Remove All</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
