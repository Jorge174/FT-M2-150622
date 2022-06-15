import Counter from "./components/Counter";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";


function App() {
  return (
    <div>
     <Header>
       <SearchBar />
     </Header>
     <Counter/>
    </div>
  );
}

export default App;
