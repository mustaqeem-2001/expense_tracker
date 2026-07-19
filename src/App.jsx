import expensesData from "./data/expensesData.js";
import { Link } from "react-router-dom";

export default function App() {
    const total = expensesData.reduce((total, expense) => total + expense.amount, 0)
    return (
        <main>
            <div>
                <i className="fa-solid fa-wallet"></i>
                <h1>Expense Tracker</h1>
            </div>
    
            <section className="header">
                <h2>TOTAL SPENT</h2>
                <p>{total}</p>
                <Link to="/add-expense">+ Add Expense </Link>
            </section>

            <section className="added-expenses">
                <h2>YOUR EXPENSES</h2>
                <i className="fa-solid fa-wallet"></i>
                {
                    expensesData.map(function(expense) {
                        return (
                            <div key={expense.id}>
                                <div>
                                    <h3>{expense.name}</h3>
                                    <span>ID {expense.id}</span>
                                </div>
                                
                                <div>
                                    <strong>£{expense.amount}</strong>
                                    <i className="fa-solid fa-trash-can"></i>
                                </div>
                                
                            </div>
                        )
                    })
                }
            </section>
        </main> 
    )
}