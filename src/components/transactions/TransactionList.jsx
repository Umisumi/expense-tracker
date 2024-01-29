import {useGlobalState} from '../../context/GlobalState'
import {TransactionItem} from './TransactionItem'


export function TransactionList() {
    const {transactions} = useGlobalState();

    if (transactions.length === 0) {
        return (
            <div className='bg-zinc-900 p-4 my-2'>
                <div className='h-full flex items-center justify-center w-full flex-col'>
                  <h1 className='text-xl font-bold my-2'>No hay transacciones por el momento</h1>
                </div>
            </div>
        )
    }

    return (
        <div className='bg-zinc-900 p-4'>
            <h3 className='text-slate-300 text-xl font-bold my-2 text-center'>Historial</h3>
            <ul>
                {transactions.map(transaction => (
                    <TransactionItem key={transaction.id} transaction={transaction} />
                ))}
            </ul>
        </div>
    )

}


/* import {useGlobalState} from '../../context/GlobalState'

function TransactionList() {

  const {transactions, deleteTransaction} = useGlobalState();

  return (
    <div>{
      transactions.map(transaction => (
        <div key={transaction.id}>
          <p>{transaction.description}</p>
          <span>{transaction.amount}</span>

          <button onClick={() => {
            deleteTransaction(transaction.id)
          }}>
            X
          </button>
        </div>
      ))
    }</div>
  )

} 

export default TransactionList */