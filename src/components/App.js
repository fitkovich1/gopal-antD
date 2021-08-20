import './style.less';
import Header from "./Header";
import CustomizeLoan from "./CustomizeLoan";
import 'antd/dist/antd.less';
import GoodFaithPayment from "./GoodFaithPayment";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className='App-container'>
        <CustomizeLoan />
        <p>If approved, LendStreet will refinance your account once you've made your Good Faith Payment.</p>
      </div>
      <GoodFaithPayment />
      <Footer />
    </div>
  );
}

export default App;
