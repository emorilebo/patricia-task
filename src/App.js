import MainSection from "./components/MainSection";
import Sidebar from "./components/Sidebar";
import Widget from "./components/Widget";


function App() {
  return (
    <div className="flex justify-center">
     
      <div className="">
        <Sidebar/>
        {/* sidebar */}
      </div>
      <div className="border-d">
        {/* main section */}
        <MainSection/>
      </div>
      <div>
        {/* left setion */}
        <Widget/>
      </div>
    </div>
  );
}

export default App;
