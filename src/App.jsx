import React,{useState, useEffect} from "react"
import Header from './Header.jsx'
import Balance from './Balance.jsx'
import Transaction from './Transaction.jsx'
import TransactionList from "./TransactionList.jsx"
import Chart from "./Chart.jsx"
function App() {
  const[transactions,setTransactions]=useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });

    useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction=(transaction)=> {
    setTransactions([...transactions,transaction]);
  };

  const income= transactions
         .filter( (t)=> t.type === "income"&& t.isIssued===true)
         .reduce((acc,t)=> acc + t.amount,0);

  const expense= transactions
         .filter((t)=> t.type === "expense"&&t.isIssued===true)
         .reduce((acc,t)=> acc + t.amount,0);     
         
         
  const balance = income - expense ;       
  
   

  return (
    <>
     <Header/>
     <div className="mains"><Balance  balance={balance} income={income} expense={expense}/>
     <Transaction addTransaction={addTransaction}/></div>
    <div className="mains">
      <TransactionList transactions={transactions}  setTransactions={setTransactions}/>
     <Chart transactions={transactions}/></div> 
    </>
  );
}

export default App
