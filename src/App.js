import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigate from "./components/Navigate";
import { useState } from "react";

function App() {
  const [selectedPage, selectPage] = useState("home")
  const handleSelectId = (selectedId) => {
    selectPage(selectedId)
    
  };

  return (
    <div>
      <Header 
      
      onSelectId={handleSelectId} />
      <Navigate 
      id={selectedPage}
      />
      <Footer onSelectId={handleSelectId}/>
    </div>
  );
}

export default App;