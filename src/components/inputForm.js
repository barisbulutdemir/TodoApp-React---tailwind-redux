import React, {useEffect, useState} from "react";
import { AiOutlineDown } from 'react-icons/ai';
import TodoList from "./todoList";
import Footer from "./footer";
import ErrMsg from "./msg/ErrMsg";
import SuccessMsg from "./msg/successMsg";
import {useDispatch, useSelector} from "react-redux";
import {addTodo} from "../reduxStore/todoSlice";




const InputForm = () => {

    const dispatch = useDispatch();
    const todoItems = useSelector((state) => state.todos.todoList)

    const [todoValue, setTodoValue] = useState("");
    const [category, setCategory] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [showErr, setShowErr] = useState(false);
    const [showSuccessMsg, setShowSuccessMsg] = useState(false);


    const options = [
        {
            _id: 1000,
            title: "categories"
        },
        {
            _id: 2000,
            title: "personal"
        },
        {
            _id: 3000,
            title: "business"
        },
        {
            _id: 4000,
            title: "others"
        },
    ];




    const handleTodo = (e) => {
        e.preventDefault();
        if(todoValue === "") {
        setErrMsg("Please write something");
        setShowErr(true);
        setShowSuccessMsg(false);
        }  else if(category === "") {
            setErrMsg("Select a category");
            setShowErr(true);
            setShowSuccessMsg(false);

        }
        else if(category === "categories") {
            setErrMsg("Select a valid category");
            setShowErr(true);
            setShowSuccessMsg(false);

        }
        else {
            dispatch(
                addTodo({
                    _id: Math.random(),
                    todo:todoValue,
                    category: category,


                })
            )
            setTodoValue("")
            setShowSuccessMsg(true)
            setShowErr(false);
            setSuccessMsg("Todo added successfully")
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            showErr && setShowErr(false);
            showSuccessMsg && setShowSuccessMsg(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, [showErr, setShowErr, showSuccessMsg]);



    return(
        <div className="w-full border border-[1px] bg-gray-50 rounded flex flex-col p-5

          ">
             <div className="flex flex-row  gap-4 h-12 ">
                 <div className="w-[80%] m-1">

                   <input onChange={(e) => setTodoValue(e.target.value)}
                         value={todoValue} className="w-full h-full border-[1px] border-gray-400 py-2 px-4
                   placeholder:text-gray-400  text-base placeholder:text-sm tracking-wide rounded outline-none
                   focus-visible:border-orange-600 hover:border-white" type="text" placeholder="Enter some todo.."/>
                 </div>
                 <div className=" w-[20%] p-1  h-full relative">
                    <select onChange={(e) => setCategory(e.target.value)} className="w-full h-full text-center capitalize outline-none border-black border-[1px]
                    cursor-pointer appearance-none rounded focus-visible:border-orange-600 p-2 text-sm">


                        {options.map((item) => (

                            <option key={item._id}>{item.title}</option>
                        ))}

                    </select >
                     <span className="absolute right-3 top-4">
                         <AiOutlineDown />
                     </span>
                </div>
             </div>
            <div className="w-full flex items-center justify-center">
            <button onClick={handleTodo} className="w-[80%] border-[1px] p-1 m-2 rounded border-gray-400  hover:border-gray-200
            duration-300 font-bold tracking-wide text-gray-600 hover:text-orange-500">Add Todo</button>
            </div>
            <div className="flex flex-col gap-4">
                <ul className="grid grid-cols-1 gap-4 border border-gray-500 shadow-2xl mt-6 p-4">
                    {
                        todoItems.length > 0 ? <> {todoItems.map((item) => {
                            return <TodoList key={item._id} todo = {item.todo} _id={ item._id} />;
                        })}</>: <p className="text-center text-yellow-500 font-thin " >Your list is empty!</p>
                    }
                    <Footer />
                </ul>
            </div>
            {showErr && <ErrMsg errMsg={errMsg} />}
            {showSuccessMsg && <SuccessMsg successMsg={successMsg} />}


        </div>



)
}

export default InputForm;