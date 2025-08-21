import React,{useState,useEffect} from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
function Chart ({transactions}){
  const data = transactions.map((t, index) => ({
    name: t.category || `Item ${index + 1}`,
    amount: t.amount, date: t.date,isIssued: t.isIssued,
  }));

const[searchCategory, setSearchCategory]=useState("");
const[month,setMonth]=useState("")



  const filteredData = data.filter(item => {
    const d = new Date(item.date); // turn saved date string into a Date object

    // category text match (case-insensitive); if no search, allow all
    const matchCategory = searchCategory
      ? item.name.toLowerCase().includes(searchCategory.toLowerCase())
      : true;

    // month filter: if user set month, check it; JS months are 0..11, so +1
    const matchMonth = month ? (d.getMonth() + 1 === Number(month)) : true;
return matchCategory && matchMonth;

  });
  const datasonly = filteredData.filter(t => t.isIssued);



  return (
     <>
       <input type="text" 
       placeholder="enter category"
       value={searchCategory} 
       onChange={(e)=> setSearchCategory(e.target.value)}/>
       
       <input
        type="number"
        placeholder="Month (1-12)"
        value={month}
        onChange={(e) => setMonth(e.target.value)}          // updates month filter
      />

    <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
      <BarChart
        width={500}
        height={300}
        data={datasonly}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="amount" fill="#8884d8" />
      </BarChart>
    </div>
    </>
  );
}



export default Chart