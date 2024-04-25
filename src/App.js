import Footer from "./ccc/Footer";
import Franchisee from "./ccc/Franchisee";
import Head from "./ccc/Head";
import Head2 from "./ccc/Head2";
import Head3 from "./ccc/Head3";
import Head4 from "./ccc/Head4";
import Img from "./ccc/Img";
import Textpage from "./ccc/Textpage";
import Textpage2 from "./ccc/Textpage2";
import Textpage3 from "./ccc/Textpage3";
import Textpage4 from "./ccc/Textpage4";

function App() {
  return (
    <div className="flex flex-col">
      <Head/>
      <Head2/>
      <Head3/>
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
