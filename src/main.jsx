import { createRoot } from 'react-dom/client';
import App from "./App.jsx";
import Add_Expense from "./pages/Add_Expense.jsx";
import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import expensesData from "./data/expensesData.js";
import { useState, createContext } from 'react';

export const ExpenseContext = createContext();

function Root() {
    const [expenses, setExpenses] = useState(expensesData);
    return (
        <BrowserRouter>
            <ExpenseContext.Provider value={{expenses, setExpenses}}>
                <Routes>
                    <Route path='/' element={<App />}/>
                    <Route path='/add-expense' element={<Add_Expense />} />
                </Routes>
            </ExpenseContext.Provider>
        </BrowserRouter>
    )
}

const root = createRoot(document.getElementById("root"))
root.render(<Root />)
