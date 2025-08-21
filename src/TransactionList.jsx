import React from "react";
function TransactionList({transactions, setTransactions}){
    
    function handleRemove(id) {
  const updated = transactions.map((t) =>
    t.id === id ? { ...t, isIssued: false } : t
  );
  setTransactions(updated);
  localStorage.setItem("transactions", JSON.stringify(updated)); // save back
}


 return(
    <div>
        <h2>Transaction List</h2>
        <ul>
            {transactions
  .filter((t) => t.isIssued !== false)   // show only valid ones
  .map((t) => (
    <li key={t.id}>{t.category} - {t.amount} ({t.category}) on {new Date(t.date).toLocaleString()} <button onClick={() => handleRemove(t.id)}>Remove</button></li>
  ))}
        </ul>
    </div>
 );
}
export default TransactionList