import MainSection from "./components/MainSection";
import Sidebar from "./components/Sidebar";
import Widget from "./components/Widget";


function App() {
  return (
    <div className="flex md:flex-row justify-center">
        <Sidebar />
        <MainSection/>
        <Widget/>
     
    </div>
  );
}

export default App;
