import { useState } from "react";
import {useGlobalState} from '../../context/GlobalState'

export default function TransactionForm() {

    const {addTransaction} = useGlobalState();
    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState(0)

    const onSubmit = (e) => {
        e.preventDefault();
        addTransaction({
            id: window.crypto.randomUUID(),
            description,
            amount: +amount // El + indica que es un dato de tipo int
        });
        // console.log(description, amount);
        setDescription('');
        setAmount(0);
    }

    return (
        <div>
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Ingresa una descripción" onChange={(e) => setDescription(e.target.value)}  value={description}
            className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"/>

            <input type="number" step="0.01" placeholder="00.00" onChange={(e) => setAmount(e.target.value)} value={amount}
            className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"/>
            <button className="bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-full">Agregar transacción</button>
        </form>
        </div>
    );
}
