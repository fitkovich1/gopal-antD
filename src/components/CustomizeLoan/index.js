import Stepper from "../Stepper";
import './style.less';

const CustomizeLoan = () => {

  return (
    <div className="CustomizeLoan">
      <p className='CustomizeLoan-firstPayment'>Schedule your first payment</p>
      <Stepper />
    </div>
  );
}

export default CustomizeLoan;