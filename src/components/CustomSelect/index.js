import selectIcon from "../../assets/img/arrows-icon.png";
import { Select } from "antd";
import { options } from "./helper";
import './style.css';

const { Option } = Select;

const CustomSelect = () => {

  return <Select className='CustomSelect'
                 defaultValue="payment"
                 suffixIcon={ <img src={ selectIcon } alt='icon'/> }
  >
    { options?.length >= 1 && options.map(option => {
      return <Option key={ option.value }
                     value={ option.value }>
        { option.content }
      </Option>
    }) }
  </Select>
}

export default CustomSelect;