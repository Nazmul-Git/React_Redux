import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementCounter, incrementCounter, resetCounter } from "../Services/Action/Action";

const Counter = () => {
    const count = useSelector((state) => state.count);
    // console.log(count);

    const dispatch = useDispatch();

    const handleDecrement = () => {
        dispatch(decrementCounter())
    }
    const handleIncrement = () => {
        dispatch(incrementCounter())
    }
    const handleReset = () => {
        dispatch(resetCounter())
    }
    return (
        <div className='flex flex-col m-4 gap-4 mt-10'>
            <div className="flex gap-4 justify-center item-center"><button onClick={handleDecrement} className='p-1 bg-red-500 text-white'>Decrement</button>
                <p className='text-purple-600 font-extrabold text-2xl'>{count}</p>
                <button onClick={handleIncrement} className='p-1 bg-blue-500 text-white'>Increment</button>
            </div>
            <button onClick={handleReset} className='p-1 bg-green-500 text-white'>Reset</button>
        </div>

    );
}

export default Counter;


// //////////////////////////////////
//-------------   STEPS   -------------------
// 1. State - count: 0
// 2. Action - increment, decrement, reset
// 3. Reducer
// 4. Store
// 5. Provide store in root
// 6. use store 