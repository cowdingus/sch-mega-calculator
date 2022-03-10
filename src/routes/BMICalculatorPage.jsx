import BMICalculator from "../components/BMICalculator";
import CalculatorDescription from "../components/CalculatorDescription";

export default function BMICalculatorPage() {
  return (
    <>
      <section>
        <CalculatorDescription title="Body Mass Index">
          <p>
            Body mass index (BMI) is a value derived from the mass (weight) and
            height of a person. The BMI is defined as the body mass divided by
            the square of the body height, and is expressed in units of kg/m2,
            resulting from mass in kilograms and height in metres.
          </p>
        </CalculatorDescription>
      </section>
      <section>
        <BMICalculator />
      </section>
    </>
  );
}
