import { Link, useNavigate } from "react-router-dom";
import expensesData from "../data/expensesData";
import { useState } from "react";

export default function Add_Expense() {
    const [name, setName ] = useState("");
    const [amount, setAmount ] = useState(0);
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const newId = expensesData[expensesData.length - 1].id + 1
        const newExpense = {
            id: newId,
            name: name,
            amount: amount,
        }
        expensesData.push(newExpense);
        navigate("/")
    }
    return (
         <main>
            <div className="dashboard-header dashboard-add-header">
                <div>
                    <i className="fa-solid fa-arrow-left"></i>
                    <Link to="/">Back</Link>
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
                        <input type="number" placeholder="0.00" onChange={(e) => setAmount(e.target.value)} />
                    </div>
                </div>                
                <button type="submit">Save Expense</button>
                <Link to="/">Cancel</Link>
            </form>
        </main>
    )
}