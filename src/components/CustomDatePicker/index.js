import { DatePicker } from "antd";
import './style.css';


const CustomDatePicker = (props) => {

  const {isPickerOpen, setIsPickerOpen} = props;

  return <DatePicker
    className='CustomDatePicker'
    placeholder={ 'MM/DD/YYYY' }
    size={ 'middle' }
    open={ isPickerOpen }
    allowClear={ true }
    onFocus={ () => setIsPickerOpen(true) }
    onBlur={ () => setIsPickerOpen(false) }
    onChange={ () => setIsPickerOpen(false) }
  />
}

export default CustomDatePicker;