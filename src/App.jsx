import { useState } from "react";
import expensesData from "./data/expensesData.js";
import { Link } from "react-router-dom";

export default function App() {
    const [showModal, setShowModal ] = useState(false);
    const [expenses, setExpenses ] = useState(expensesData);
    const [expenseId, setExpenseId ]= useState(0);
    const [deleteExpense, setDeleteExpense] = useState(null);
    const total = expenses.reduce((total, expense) => total + expense.amount, 0)

    function showDeleteModal(e) {
        const id = Number(e.currentTarget.id);
        setExpenseId(id)

        setDeleteExpense(
            expenses.find(function(expense) {
                return expense.id == id;
            })
        )
        
        setShowModal(true)
    }

    function handleDelete(e) {
        setExpenses(
            expenses.filter(function(expense) {
                return expense.id != expenseId;
            })
        )        
        setShowModal(false)
    }

    return (
        <>
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
                        expenses.map(function(expense) {
                            return (
                                <div key={expense.id} id={expense.id}>
                                    <div>
                                        <h3>{expense.name}</h3>
                                        <span>ID {expense.id}</span>
                                    </div>
                                    
                                    <div>
                                        <strong>£{expense.amount}</strong>
                                        <button onClick={showDeleteModal} aria-label="Delete expense" id={expense.id}>
                                            <i className="fa-solid fa-trash-can" ></i>
                                        </button>
                                    </div>
                                    
                                </div>
                            )
                        })
                    }
                </section>
            </main> 
        
            {
                showModal && 
                <div className="delete-modal">
                    <div className="delete-modal-head">
                        <div>
                            <i className="fa-solid fa-triangle-exclamation"></i>
                            <h2>Delete Expense?</h2>
                            <p>This cannot be undone</p>
                        </div>
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                    <div className="delete-modal-expense-info">
                        <span>{deleteExpense.name}</span>
                        <span>{deleteExpense.amount}</span>
                    </div>
                    <p>Removing {deleteExpense.name} will update your total. Remaning balance will show {total - deleteExpense.amount}</p>
                    <button onClick={() => setShowModal(false)}>Cancel</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            }
        </>
       
    )
}