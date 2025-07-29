import BudgetCard from "./Components/Budget";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 text-gray-800">
      <h1 className="text-4xl font-bold text-center">Budget Tracker</h1>
      <p className="text-center mt-2">Track your spending smartly.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <BudgetCard name="Food" amt={1000} max={5000} />
        <BudgetCard name="Rent" amt={5000} max={5000} />
        <BudgetCard name="Travel" amt={2000} max={3000} />
      </div>
    </div>
  );
}

export default App;
 