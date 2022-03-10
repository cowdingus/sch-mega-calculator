import NumberConverter from "../components/NumberConverter";
import CalculatorDescription from "../components/CalculatorDescription";

export default function NumberConverterPage() {
  return (
    <>
      <section>
        <CalculatorDescription title="Number Converter">
          <p>
            A numeral system (or system of numeration) is a writing system for
            expressing numbers; that is, a mathematical notation for
            representing numbers of a given set, using digits or other symbols
            in a consistent manner.
          </p>
          <p>
            The same sequence of symbols may represent different numbers
            in different numeral systems. For example, "11" represents the number
            eleven in the decimal numeral system (used in common life), the number
            three in the binary numeral system (used in computers), and the number
            two in the unary numeral system (e.g. used in tallying scores).
          </p>
        </CalculatorDescription>
      </section>
      <section>
        <NumberConverter />
      </section>
    </>
  );
}
