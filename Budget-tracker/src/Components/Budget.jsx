import React from "react";

function BudgetCard({name, amt, max}){
    const getProgressColor = (percent) => {
    if (percent < 50) return "bg-blue-300";
    if (percent < 75) return "bg-green-300";
    return "bg-red-500";
  };

  const progress = Math.min((amt / max) * 100, 100);
  const progressColor = getProgressColor(progress);

    return(
        <div className={`bg-white p-4 m-4 border-1.3 shadow-md rounded-2xl ${amt>max? "border-red-200": "border-green-300"}`}>
            <div className="flex justify-between m-2">
                <h2 className="font-semibold text-shadow-xs">{name}</h2>
                <span className="font-sans text-shadow-xs">Rs.{amt}/ Rs.{max}</span>
            </div>

            {/* Progess */}
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full ${progressColor}`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
     {/* Buttons */}
      <div className="flex justify-end gap-2 mt-4">
        <button className="text-xs text-blue-600 hover:font-extrabold">Add Expense</button>
        <button className="text-xs text-gray-600 hover:font-extrabold">View Expenses</button>
      </div>
    </div>
    )
}
export default BudgetCard;