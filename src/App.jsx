import expensesData from "./data/expensesData.js";

export default function App() {
    const total = expensesData.reduce((total, expense) => total + expense.amount, 0)
    return (
        <main>
            <div>
                {/* Logo */}
                <h1>Expense Tracker</h1>
            </div>
    
            <section className="header">
                <h2>TOTAL SPENT</h2>
                <p>{total}</p>
                <button> + Add Expense </button>
            </section>

            <section className="added-expenses">
                <h2>YOUR EXPENSES</h2>
                {/* Expenses go here */}
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
                                    {/* Bin Icon */}
                                </div>
                                
                            </div>
                        )
                    })
                }
            </section>
        </main> 
    )
}