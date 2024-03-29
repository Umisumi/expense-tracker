import {useGlobalState} from '../context/GlobalState'

function IncomeExpenses() {

    const {transactions} = useGlobalState();

    const amounts = transactions.map(transaction => transaction.amount)

    const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2) // Redondear a 2

    const expense = (amounts
    .filter(item => item < 0)
    .reduce((acc, item) => (acc += item), 0) * -1).toFixed(2) // el operador -1 es para mostrar los gastos con un valor posistivo en Front-End


  return (
    <>
        <div className='flex justify-between my-2'>
            <h4>Ingresos</h4>
            <p>{income}</p>
        </div>
        <div className='flex justify-between my-2'>
            <h4>Gastos</h4>
            <p>{expense}</p>
        </div>
    
    </>
    
  )
}

export default IncomeExpenses