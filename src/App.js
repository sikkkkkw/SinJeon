import Footer from "./pages/Footer"
import Franchisee from "./pages/Franchisee";
import Head from "./pages/Head";
import Head2 from "./pages/Head2";
import Head4 from "./pages/Head4";
import Img from "./pages/Img";
import Textpage from "./pages/Textpage";
import Textpage2 from "./pages/Textpage2";
import Textpage3 from "./pages/Textpage3";
import Textpage4 from "./pages/Textpage4";

function App() {
  return (
    <div className="flex flex-col">
      <Head/>
      <Head2/>
      <Head4/>
      <Textpage/>
      <Textpage2/>
      <Textpage3/>
      <Textpage4/>
      <Franchisee/>
      <Img/>
      <Footer/>
    </div>
  );
}

export default App;
