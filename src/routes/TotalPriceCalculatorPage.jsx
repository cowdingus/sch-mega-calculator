import TotalPriceCalculator from "../components/TotalPriceCalculator";
import CalculatorDescription from "../components/CalculatorDescription";

export default function TotalPriceCalculatorPage() {
  return (
    <>
      <section>
        <CalculatorDescription title="Taxed Price Calculator">
          <p>
            This calculator calculates final price based on initial price, PPN,
            and amount of discount.
          </p>
        </CalculatorDescription>
      </section>
      <section>
        <TotalPriceCalculator />
      </section>
    </>
  );
}
