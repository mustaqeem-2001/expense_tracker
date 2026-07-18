import expensesData from "./data/expensesData.js";

export default function App() {
    console.log(expensesData);

    return (
        <main>
            <div>
                {/* Logo */}
                <h1>Expense Tracker</h1>
            </div>
    
            <section className="header">
                <h2>TOTAL SPENT</h2>
                <p>£420</p>
                <button> + Add Expense </button>
            </section>

            <section className="added-expenses">
                <h2>YOUR EXPENSES</h2>
                {/* Expenses go here */}
                {
                    expensesData.map(function(expense) {
                        return (
                            <div>
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