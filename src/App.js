import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpenses/NewExpense'

function App() {

  const data = [
    {title:'Car Insurance', amount:134.45, date: new Date(2021,5,12)},
    {title:'Life Insurance', amount:367.5, date: new Date(2021,5,14)}
  ]

  const saveExpenseData=(enteredExpenseData)=>{
    const expenseData = {
      ...enteredExpenseData
    }
    console.log(expenseData)
  }

  return (
    <div>
      <NewExpense onAddExpense={saveExpenseData}/>
      <Expenses data = {data}/>
    </div>
  );
}

export default App;
