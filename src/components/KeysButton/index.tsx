import styles from "./styles.module.css";
import cx from "classnames";

type TKeysButtonProps = {
  item: string | number;
  value: any;
  type: string;
  customClass?: string | boolean;
  onClick?: any;
};

const KeysButton = ({ item, value, type, customClass, onClick }: TKeysButtonProps) => {
  return (
    <button value={value} className={cx(styles.button, styles[type], customClass)} onClick={onClick}>
      {item}
    </button>
  );
};
export default KeysButton;
