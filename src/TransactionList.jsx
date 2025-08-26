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
    <div className="addtransactionlikst">
        <h2 className="addtitle">Transaction List</h2>
        <div className="taable">
          <table className="transaction-table">
  <thead>
    <tr>
      <th>Type</th>
      <th>Category</th>
      <th>Amount</th>
      <th>Date</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {transactions
      .filter((t) => t.isIssued !== false) // show only valid ones
      .map((t) => (
        <tr key={t.id}>
          <td>{t.category}</td>
          <td>₹{t.amount}</td>
          <td>{t.type}</td>
          <td>{t.date}</td>
          <td>
            <button onClick={() => handleRemove(t.id)}>Remove</button>
          </td>
        </tr>
      ))}
  </tbody>
</table>
</div>
    </div>
 );
}
export default TransactionList