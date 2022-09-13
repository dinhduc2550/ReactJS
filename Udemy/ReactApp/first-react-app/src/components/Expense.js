import ExpenseItem from "./ExpenseItem"
import './Expense.css'
function Expense(props){
    return props.expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ));
}

export default Expense