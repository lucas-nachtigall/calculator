import styles from "@/styles/Calculator.module.css";
import KeysButton from "@/components/KeysButton";
import { keys } from "@/enums/keys";
import useCalculator from "./useCalculator";

function Calculator() {
  const {
    num,
    oldNum,
    result,
    operator,
    inputValue,
    porcentage,
    clear,
    deleteHandler,
    changeSign,
    operationHandler,
    calculate,
  } = useCalculator();

  return (
    <>
      <section className={styles.calculatorWrapper}>
        <h2 className={styles.historic}>{oldNum + operator + num + (result > 0 ? result : '')}</h2>
        <h1 className={styles.result}>
          {result}
        </h1>
        {keys &&
          keys.map(({ label, value, type }, key) => {
            return (
              <KeysButton
                value={value}
                item={label}
                type={type}
                key={key}
                onClick={(e: any) => {
                  inputValue(e.target.value);
                  clear(e.target.value);
                  deleteHandler(label)
                  porcentage(e.target.value);
                  changeSign(label);
                  operationHandler(e.target.value);
                  calculate(label);
                }}
              />
            );
          })}
      </section>
    </>
  );
}

export default Calculator;

