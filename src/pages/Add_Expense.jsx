import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { ExpenseContext } from "../main.jsx";

export default function Add_Expense() {
    const [name, setName ] = useState("");
    const [amount, setAmount ] = useState(0);
    const navigate = useNavigate();
    const { expenses, setExpenses } = useContext(ExpenseContext);
    console.log(expenses)
    function handleSubmit(e) {
        e.preventDefault();
        const newId = expenses[expenses.length - 1].id + 1
        const newExpense = {
            id: newId,
            name: name,
            amount: amount,
        }
        setExpenses([...expenses, newExpense]);
        navigate("/")
    }
    return (
         <main>
            <div className="dashboard-header dashboard-add-header">
                <div>
                    
                    <Link to="/">
                        <i className="fa-solid fa-arrow-left"></i>
                        Back
                    </Link>
                </div>
                
                <h1>Add Expense</h1>
                <p>Fill in the details blow</p>
            </div>
    
            <form className="add-expense" onSubmit={handleSubmit}>
                <div className="add-expense-info-layout">
                    <i className="fa-solid fa-tag"></i>
                    <label> EXPENSE NAME</label>
                    <input type="text" placeholder="e.g. Food, Transport, Gym..." onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="add-expense-info-layout">
                    <label>£ AMOUNT</label> 
                    <div className="amount-input">
                        <span>£</span>
                        <input type="number" placeholder="0.00" onChange={(e) => setAmount(Number(e.target.value))} />
                    </div>
                </div>                
                <button type="submit">Save Expense</button>
                <Link to="/">Cancel</Link>
            </form>
        </main>
    )
}