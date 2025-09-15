import SearchInterface from "./components/Search-Interface";
import { SearchProvider } from "./hook/context.jsx";

function App() {
  return (
    <SearchProvider>
      <SearchInterface />
    </SearchProvider>
  );
}

export default App;
