import { useState } from "react";
import { Steps } from 'antd';
import { steps } from "./helper";
import './style.css';

const { Step } = Steps;


const Stepper = () => {

  const [currentStep, setCurrentStep] = useState(2);

  const onCurrentStepChange = (currentStep) => {
    setCurrentStep(currentStep);
  }

  return (
    <Steps labelPlacement={'vertical'}
           responsive={true}
           size='small'
           type={'default'}
           current={currentStep}
           onChange={onCurrentStepChange}
           className='Stepper'
    >
      { steps?.length >= 1 && steps.map(step => {
        return <Step key={ step }
                     className='CustomizeLoan-firstPayment-steps-item'
                     title={ step }
        />
      }) }
    </Steps>
  )
}

export default Stepper;