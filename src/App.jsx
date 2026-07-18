export default function App() {
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
            </section>
        </main> 
    )
}