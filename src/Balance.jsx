function Balance ({balance,income, expense }){
    return(
         <div>
            <h3> YOUR BALANCE :₹{balance} </h3>
            <p> TOTAL INCOME :₹{income}</p>
            <p> TOTAL EXPENSE :₹{expense}</p>

         </div>
    )
}
export default Balance