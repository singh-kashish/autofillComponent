import Autofill from "./components/Autofill";
const App = () => {
  return (
    <div className="App flex-col">
      <div className="bg-gray-100 p-14 m-40 mx-60 border-2 border-solid border-gray-300">
        <h1 className="text-lg mb-4 pb-1 border-b-2 text-center">
          AutoComplete for Spenny
        </h1>

        <Autofill
          suggestions={[
            "Apples",
            "Bask",
            "Crocodilian",
            "Death Roll",
            "Eggs",
            "Jaws",
            "Reptile",
            "Solitary",
            "Tail",
            "Wetlands",
            "Searching",
          ]}
        />
      </div>
    </div>
  );
};

export default App;
