import {useGlobalState} from '../context/GlobalState'

function Balance() {

    const {transactions} = useGlobalState();

    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0);

    return (
        <div className='flex justify-between items-center my-2'>
            {/* {JSON.stringify(amounts, null, 2)} */}
            <h3 className='text-slate-400'>Balance</h3>
            <h1 className='text-2xl font-bold'>${total}</h1>
            <div>
                {/* {JSON.stringify(data)} // Muestra los valores del arreglo*/}
            </div>
        </div>
    )
}

export default Balance