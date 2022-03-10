import TemperatureConverter from "../components/TemperatureConverter";
import CalculatorDescription from "../components/CalculatorDescription";

export default function TemperatureConverterPage() {
  return (
    <>
      <section>
        <CalculatorDescription title="Temperature Converter">
          <p>
            Temperature is a physical quantity that expresses hot and cold. It is
            the manifestation of thermal energy, present in all matter, which is
            the source of the occurrence of heat, a flow of energy, when a body is
            in contact with another that is colder or hotter. Temperature should
            not be confused with heat.
          </p>
        </CalculatorDescription>
      </section>
      <section>
        <TemperatureConverter />
      </section>
    </>
  );
}
