import {
  Header,
  Products,
  Subscription,
  Questions,
  Footer,
} from "./components";

function App() {
  return (
    <div className="bg-color-secondary-800">
      <Header />
      <Products />
      <Subscription />
      <Questions />
      <Footer />
    </div>
  );
}

export default App;
