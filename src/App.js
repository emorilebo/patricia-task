import MainSection from "./components/MainSection";
import Sidebar from "./components/Sidebar";
import Widget from "./components/Widget";


function App() {
  return (
    <div className="md:flex sm:flex-row sm:items-center justify-center">
        <Sidebar />
        <MainSection/>
        <Widget/>
    </div>
  );
}

export default App;
