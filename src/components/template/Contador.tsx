import { useState } from "react";

export default function Contador(){
    const [valor, setValor] = useState(0)

    function incrementar(){
        setValor(valor + 1)
    }

    function decrementar(){
        if(valor > 0){
            setValor(valor - 1)
        }
    }

    return(
        <div className="flex justify-center items-center rounded-full my-2 py-2 px-4 bg-white select-none">
            {/* <div className="flex justify-center items-center rounded-full w-8 h-8 bg-white text-gray-700">-</div> */}
            <div className="flex bg-gray-400 rounded-full w-6 h-6 justify-center items-center select-none" onClick={decrementar}>-</div>
            <div className="mx-2">{valor}</div>
            <div className="flex bg-gray-400 rounded-full w-6 h-6 justify-center items-center select-none" onClick={incrementar}>+</div>
            {/* <div className="flex justify-center items-center rounded-full w-8 h-8 bg-white text-gray-700">+</div> */}
        </div>
    )
}