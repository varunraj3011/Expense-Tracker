import React,{ useState} from "react"
function Transaction({ addTransaction}){
    const[amount,setAmount]=useState("");
    const[type,setType]=useState("income");
    const [category,setCategory]= useState("select category");


    
    const handleSubmit=(e)=>{
        e.preventDefault();
        if (!amount || !category) return;

        addTransaction({
            id: Date.now(),
            amount: parseFloat(amount),
            type: type,
            category: category,
            date: new Date().toLocaleString(),
            isIssued:true,
            
           
        });

        setAmount("");
        setCategory("");
    };

    


    return(
        <div className="addtranstion">
          <form onSubmit={handleSubmit}>
            <h3 className="ADDTITLE">Add Transaction</h3>
            <input type="number" value={amount}
              onChange={(e)=> setAmount(e.target.value)}
              placeholder="Enter amount"/>

            <select value={type} onChange={(e)=> setType(e.target.value)}>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
            <select value={category} onChange={(e)=>setCategory(e.target.value)}>
            
              <option value="">select category</option>
                {type === "income" && (
            <>
            <option value="salary">Salary</option>
            <option value="stocks">Stocks</option>
            <option value="business">Business</option>
            </> )}

        
           {type === "expense" && (
            <>
            <option value="food">Food</option>
            <option value="fuel">Fuel</option>
            <option value="grocery">Grocery</option>
            <option value="medical">Medical</option>
            <option value="service">Service</option>
            <option value="rent">Rent</option>
            <option value="Enjoyment">Enjoyment</option>
          </>)}
           </select>

           <button type="submit">Add</button>
          </form>
                
            

        </div>
    )

}
export default Transaction