import {VictoryPie, VictoryLabel} from 'victory';
import {useGlobalState} from '../context/GlobalState'
import {BsPieChartFill} from 'react-icons/bs'


export function ExpenseChart() {
  
    const {transactions} = useGlobalState();
    
    const totalIncomes = transactions
        .filter((transaction) => transaction.amount > 0)
        .reduce((acc, transaction) => (acc += transaction.amount), 0);

    const totalExpenses = transactions
        .filter((transaction) => transaction.amount < 0)
        .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;


    console.log({
        totalIncomes,
        totalExpenses
    });

    const totalFlow = totalIncomes + totalExpenses;
    let expensesPercentage = 0;
    let incomesPercentage = 0;

    if (totalFlow > 0) {
      expensesPercentage = Math.round((totalExpenses / totalFlow) * 100);
      incomesPercentage = Math.round((totalIncomes / totalFlow) * 100);
    }

    if (totalIncomes === 0 && totalExpenses === 0) {
        return (
            <div className='bg-zinc-900 p4 my-2'>
                <div className="h-full flex items-center justify-center w-full flex-col">
                <BsPieChartFill className="text-9xl" />
                    <h1 className="text-3xl font-bold my-2">Aún no hay datos</h1>
                </div>
            </div>
        );
    }

   return (
    <div className="bg-zinc-950">
      <VictoryPie
        colorScale={["#e74c3c", "#2ecc71"]}
        data={[
          { x: "Gastos", y: expensesPercentage },
          { x: "Ingresos", y: incomesPercentage },
        ]}
        animate={{
          duration: 2000,
        }}
        labels={({ datum }) => `${datum.y}%`}
        labelComponent={
          <VictoryLabel
            angle={45}
            style={{
              fill: "white",
            }}
          />
        }
      />
    </div>
  );

}

