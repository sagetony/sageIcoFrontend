import Header from "../src/components/Header";
import logo from "../src/assets/img/logo/logo.png";
import Banner from "./components/Banner";
import Partner from "./components/Partner";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import Team from "./components/Team";
function App() {
  return (
    <div>
      <Header logo={logo} />
      <main className="fix">
        <Banner />
        <Partner />
        <About />
        <WhyUs />
        <Team />
      </main>
    </div>
  );
}

export default App;
