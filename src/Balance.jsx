function Balance ({balance,income, expense }){
    return(
          <>
<div className="balance-card">
  <h3 className="card-title">Balance Overview</h3>         
 <div className="main"> 
            
  <div className="cart">
    
    <div className="carts">
      <p className="title">Total Balance</p>
      <h3 className="amount">₹{balance}</h3>
    </div>
  </div>

  <div className="cart">
    <div className="carts">
      <p className="title">Total Income</p>
      <h3 className="amount">₹{income}</h3>
    </div>
  </div>

  <div className="cart">
    <div className="carts">
      <p className="title">Total Expense</p>
      <h3 className="amount">₹{expense}</h3>
    </div>
  </div>
</div>
</div>
</>
       
    )
}
export default Balance