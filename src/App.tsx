import Header from "./components/Header";
import GlobalStyles from "./components/GlobalStyles";
import Meta from "./components/Meta";
import Main from "./pages/main";

const App = () => {
  return (
    <div className="App">
      <Meta />
      <GlobalStyles />

      <Header />

      <Main />
    </div>
  );
};

export default App;
