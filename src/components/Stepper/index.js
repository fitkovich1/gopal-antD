
import { Steps } from 'antd';
import { useState } from "react";
const { Step } = Steps;



const Steps = () => {

  const [currentStep, setCurrentStep] = useState(2);

  const onCurrentStepChange = (currentStep) => {
    setCurrentStep(currentStep);
  }

  const steps = [
    'Contact information',
    'Your Background',
    'Customize Loan',
    'Income verification',
    "Approval"
  ];


  return (
    <Steps labelPlacement={'vertical'}
           responsive={true}
           size='small'
           type={'default'}
           current={currentStep}
           onChange={onCurrentStepChange}
           className='CustomizeLoan-firstPayment-steps'
    >
      {steps?.length >= 1 && steps.map(step => {
        return <Step key={step}
                     className='CustomizeLoan-firstPayment-steps-item'
                     title={step}
        />
      })}
    </Steps>
  )
}

export default Steps;