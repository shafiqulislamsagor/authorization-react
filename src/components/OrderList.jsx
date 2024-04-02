import { useRef, useState } from "react";

const OrderList = () => {
    const [sum , setSum] = useState(0)
    const ref = useRef(0)
    const refHandle = () =>{
        ref.current = ref.current + 1
    }
    const sumHandle = () =>{
        const sumed = sum + 1 ;
        setSum(sumed)
    }
    console.log(sum + ' state value');
    return (
        <div>
            <h3>My Orders</h3>
            <ul>
                <li>item list-1</li>
                <li>item list-2</li>
                <li>item list-3</li>
                <li>item list-4</li>
            </ul>
            <button className="btn" onClick={sumHandle}>Sum button</button>
            <button className="btn" onClick={refHandle}>Sum ref button</button>
        </div>
    );
};

export default OrderList;