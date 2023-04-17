import './css/style.css';
import InputForm from "./components/inputForm";

function App() {
  return (
    <div className="App">
     <div className=" w-full min-h-screen bg-gradient-to-t from-gray-400 to-gray-50 bg-gray-50 px-4 flex justify-center items-center">
        <div className="w-[850px] p-10  flex flex-col gap-10">
         <InputForm/>
        </div>
     </div>
    </div>
  );
}

export default App;
