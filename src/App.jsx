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
      <div className='bg-zinc-950 text-white min-h-screen flex justify-center items-center'>
        <div className='xl:w-2/5 flex justify-center items-center'>
          <div className='bg-neutral-800 p-10 rounded-md w-full'>
            <Header />
            <div className='flex flex-col md:flex-row justify-between gap-4'>
              <div className='w-full md:w-1/2 flex flex-col'>
                <IncomeExpenses />
                <Balance />
                <TransactionForm />
              </div>
              <div className='w-full md:w-1/2 flex flex-col'>
                <ExpenseChart />
                <div className="mt-3 max-h-80 overflow-y-auto">
                   <TransactionList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  )
}

export default App

// NOTES
/*
  rfce -> Create a function
*/
