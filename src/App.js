import MainSection from "./components/MainSection";
import Sidebar from "./components/Sidebar";


function App() {
  return (
    <div className="flex">
     
      <div>
        <Sidebar/>
        {/* sidebar */}
      </div>
      <div>
        {/* main section */}
        <MainSection/>
      </div>
      <div>
        {/* left setion */}
      </div>
    </div>
  );
}

export default App;
