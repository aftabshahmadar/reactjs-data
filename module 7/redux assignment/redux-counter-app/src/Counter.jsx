import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/Actions';

const Counter = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
};

export default Counter;
