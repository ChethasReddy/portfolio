import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Layout from "./components/Layout/Layout";
import { useDisplayContext } from "./context/DisplayContext";

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning";
  if (hour < 18) return "Good Afternoon";
  return "Good Evening";
}

function App() {
  const { submissions } = useDisplayContext();
  const latestName =
    submissions.length > 0 ? submissions[submissions.length - 1].name : "User";

  return (
    <div className="container py-5">
      <h1 className="app-title text-center mb-4">
        {getGreeting()}, {latestName}
      </h1>
      <div className="glass-container layout-animation">
        <Layout />
      </div>
    </div>
  );
}

export default App;
