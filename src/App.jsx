import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ExpenseContext } from "./main.jsx";

export default function App() {
    const [showModal, setShowModal ] = useState(false);
    const { expenses, setExpenses } = useContext(ExpenseContext);
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
    console.log(expenses);
    return (
        <>
            <main>
                <section className="dashboard-header">
                    <div className="brand">
                        <i className="fa-solid fa-wallet"></i>
                        <h1>Expense Tracker</h1>
                    </div>
                    <div className="expense-summary">
                        <h2 className="expense-total-text">TOTAL SPENT</h2>
                        <p className="expense-total">£{total}</p>
                        <Link to="/add-expense" className="add-expense-link">+ Add Expense </Link>
                    </div>
                </section>

                <section className="added-expenses">
                    <h2>YOUR EXPENSES</h2>
                    {
                        expenses.map(function(expense) {
                            return (
                                <div key={expense.id} className="expense-item">
                                    <div className="expense-item-left">
                                        <h3 className="expense-item-name">{expense.name}</h3>
                                        <span className="expense-item-id">ID #{expense.id}</span>
                                    </div>
                                    
                                    <div className="expense-item-right">
                                        <strong className="expense-item-amount">£{expense.amount}</strong>
                                        <button onClick={showDeleteModal} aria-label="Delete expense" id={expense.id} className="expense-item-delete">
                                            <i className="fa-regular fa-trash-can" ></i>
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
                <div className="modal-overlay">
                    <div className="delete-modal">
                        <div className="delete-modal-head">
                            <i className="fa-solid fa-triangle-exclamation"></i>
                            <div>
                                <h2>Delete Expense?</h2>
                                <p>This cannot be undone</p>
                            </div>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                        <div className="delete-modal-expense-info">
                            <span>{deleteExpense.name}</span>
                            <span>{deleteExpense.amount}</span>
                        </div>
                        <p className="delete-modal-expense-detail">Removing {deleteExpense.name} will update your total. Remaning balance will show <span className="calculated-total">£{total - deleteExpense.amount}</span></p>
                        <div className="delete-modal-buttons">
                            <button onClick={() => setShowModal(false)} className="delete-modal-cancel">Cancel</button>
                            <button onClick={handleDelete} className="delete-modal-confirm">Delete</button>
                        </div>
                    </div>
                </div>
            }
        </>
       
    )
}