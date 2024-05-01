import {GlobalProvider} from './context/GlobalState'

import Header from './components/Header'
import Balance from './components/Balance'
import TransactionForm from './components/transactions/TransactionForm'
import {TransactionList} from './components/transactions/TransactionList'
import IncomeExpenses from './components/IncomeExpenses'
import {ExpenseChart} from './components/ExpenseChart'


function App() {
  return (
    <GlobalProvider>
      <div className='bg-zinc-950 text-white h-screen flex justify-center items-center'>
        <div className='w-4/5 flex justify-center items-center'>
          <div className='bg-neutral-800 p-10 rounded-md w-full flex flex-wrap'>
            <Header />
            <div className='flex flex-col md:flex-row justify-between gap-4'>
              <div className='flex-1'>
                <IncomeExpenses />
                <Balance />
                <TransactionForm />
              </div>
              <div className='flex-1 flex flex-col'>
                <ExpenseChart />
                <TransactionList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  )
}


/* function App() {
  return (
  <div className="container mx-auto">
  <GlobalProvider>
    <div className='bg-zinc-950 text-white min-h-screen flex justify-center items-center'>
      <div className='w-full md:w-3/5 flex justify-center items-center'>
        <div className='bg-neutral-800 p-10 rounded-md w-full md:w-4/5'>
          <Header />
          <div className='flex flex-col md:flex-row justify-between gap-4'>
            <div className='w-full md:w-1/2'>
              <IncomeExpenses />
              <Balance />
              <TransactionForm />
            </div>
            <div className='w-full md:w-1/2 flex flex-col'>
              <ExpenseChart />
              <TransactionList />
            </div>
          </div>
        </div>
      </div>
    </div>
  </GlobalProvider>
</div>
  )
} */

export default App


// NOTES
/*
  rfce -> Create a function
*/

