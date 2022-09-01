import React from 'react'

function studDataContext() {
  return (
    <div>studDataContext</div>
  )
}

export default studDataContext
// import React, { useContext, useState } from "react";
// import { v4 as uuidV4 } from "uuid";
// import useLocalStorage from "../hooks/useLocalStorage";

// const studDataContext = React.createContext();

// export function useBudgets() {
//   return useContext(studDataContext);
// }


// export const BudgetsProvider = ({ children }) => {
//     const [studData, setStudData] = useLocalStorage("Student Data", [])

//   function getStudData(studDataId) {
//     return expenses.filter((expense) => expense.studDataId === studDataId);
//   }

//   function addBudget({ name, maxAmount }) {
//     setBudgets((prevBudgets) => {
//       if (prevBudgets.find((budget) => budget.name === name)) {
//         return prevBudgets;
//       }
//       return [...prevBudgets, { id: uuidV4(), name, maxAmount }];
//     });
//   }

//   function addExpense({ description, amount, budgetId }) {
//     setExpenses((prevExpenses) => {
//       return [...prevExpenses, { id: uuidV4(), description, amount, budgetId }];
//     });
//   }

// function editBudget() {}

//   function editExpense({updatedDescription, updatedAmount, id }) {
//     setExpenses((prevExpenses) => {
//       return prevExpenses.map((expense) => {
//         if (expense.id === id) {
//           expense.description = updatedDescription
//           expense.amount = updatedAmount
//         }
//         return expense
//       })}
//     );
//   }

//   function deleteBudget({ id }) {
//     setExpenses((prevExpenses) => {
//       return prevExpenses.map((expense) => {
//         if (expense.budgetId !== id) return expense;
//         return { ...expense, budgetId: UNCATEGORIZED_BUDGET_ID };
//       });
//     });

//     setBudgets((prevBudgets) => {
//       return prevBudgets.filter((budget) => budget.id !== id);
//     });
//   }
//   function deleteExpense({ id }) {
//     setExpenses((prevExpenses) => {
//       return prevExpenses.filter((expense) => expense.id !== id);
//     });
//   }
//   return (
//     <BudgetsContext.Provider
//       value={{
//         budgets,
//         expenses,
//         getBudgetExpenses,
//         addBudget,
//         addExpense,
//         editBudget,
//         editExpense,
//         deleteBudget,
//         deleteExpense,
//       }}
//     >
//       {children}
//     </BudgetsContext.Provider>
//   );
// };
