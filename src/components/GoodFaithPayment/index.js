import { useState } from 'react';
import { Button } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import CustomDatePicker from '../CustomDatePicker';
import CustomPopover from '../CustomPopover';
import CustomSelect from '../CustomSelect';
import './style.css';

const GoodFaithPayment = () => {

  const [isPickerOpen, setIsPickerOpen] = useState(false);

  const renderPaymentAmount = () => {
    return <div className='GoodFaithPayment-date-amount'>
      <p className='GoodFaithPayment-date-amount-payment'>Your chosen payment amount</p>
      <p className='GoodFaithPayment-date-amount-price'>507.00</p>
    </div>
  };

  const renderSelectAndPopover = () => {
    return <>
      <CustomSelect/>
      <CustomPopover content={ 'Choose your payment frequency' }
                     title={ "Choose payment frequency" }
      />
    </>
  };

  const renderDateContainer = () => {
    return <>
      <CalendarOutlined
        className='GoodFaithPayment-date-container-calendar'
        onClick={ () => setIsPickerOpen(!isPickerOpen) }
      />
      <CustomDatePicker setIsPickerOpen={ setIsPickerOpen }
                        isPickerOpen={ isPickerOpen }
      />
      <CustomPopover content={ 'Choose your Good Faith Payment Date' }
                     title={ "Choose date" }
      />
    </>
  };

  const renderButtons = () => {
    return <div className='GoodFaithPayment-buttons'>
      <Button size='large' type='primary'>Back</Button>
      <Button size='large' type='primary'>Next</Button>
    </div>
  };

  return <div className='GoodFaithPayment'>
    <p>Choose your Good Faith Payment Date</p>
    <div className='GoodFaithPayment-date'>
      <div className='GoodFaithPayment-date-container'>
        { renderDateContainer() }
      </div>
      { renderPaymentAmount() }
    </div>
    <p>Would you like to make your payment in one installment each month or split it up between two payments?</p>
    <div className='GoodFaithPayment-payment-frequency'>
      <div className='GoodFaithPayment-payment-frequency-container'>
        { renderSelectAndPopover() }
      </div>
      { renderPaymentAmount() }
    </div>
    <p>What day(s) of the month would you like to pay?</p>
    <div className='GoodFaithPayment-pay-month'>
      <div className='GoodFaithPayment-pay-month-container'>
        { renderSelectAndPopover() }
      </div>
      <div className='GoodFaithPayment-pay-month-container'>
        { renderSelectAndPopover() }
      </div>
    </div>
    { renderButtons() }
  </div>
}

export default GoodFaithPayment;