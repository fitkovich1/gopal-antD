import { InfoCircleOutlined } from "@ant-design/icons";
import { Popover } from "antd";

const CustomPopover = (props) => {

  const { content, title } = props;

  return <Popover content={content}
                  title={title}
                  trigger="hover"
  >
    <InfoCircleOutlined className='GoodFaithPayment-date-container-info'/>
  </Popover>
}

export default CustomPopover;