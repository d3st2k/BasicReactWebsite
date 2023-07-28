import "./index.css";

import TopPart from "./components/Header/Header";
import Content from "./components/Content/Content";
import GlobalStyle from "./GlobalStyles";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <main>
      <GlobalStyle />
      <TopPart />
      <Content />
      <Footer/>
    </main>
  );
}

export default App;
