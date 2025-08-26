import React,{useState,useEffect} from "react"
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
function Chart ({transactions}){
  const data = transactions.map((t, index) => ({
    name: t.category || `Item ${index + 1}`,
    amount: t.amount, date: t.date,isIssued: t.isIssued,type:t.type,
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
  const datasonly = filteredData.filter(t => t.isIssued)

 const groupedData = Object.values(
    datasonly.reduce((acc, curr) => {
      if (!acc[curr.name]) {
        acc[curr.name] = { name: curr.name, value: 0 };
      }
      acc[curr.name].value += curr.amount;
      return acc;
    }, {})
  );

  const COLORS = ["#ad3af0ff","#4caf50", "#2156d2ff", "#2196f3", "#ff9800", "#9c27b0"];


  return (
     <>
     <div className="charts"> 
       <h2 className="addtitle">Analyze transaction</h2>
    <div className="charts-input"><input type="text" className="onest"
       placeholder="Enter category"
       value={searchCategory} 
       onChange={(e)=> setSearchCategory(e.target.value)}/>   
       <input className="second"
        type="number"
        placeholder="Month (1-12)"
        value={month}
        onChange={(e) => setMonth(e.target.value)}          // updates month filter
      /></div> 
          <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
     <PieChart width={400} height={300}>
          <Pie
            data={groupedData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={70}   // 👈 makes it donut
            outerRadius={120}
            paddingAngle={3}
          >
            {groupedData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
    </div></div>
    </>
  );
}



export default Chart