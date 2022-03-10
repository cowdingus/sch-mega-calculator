import InstallmentCalculator from "../components/InstallmentCalculator";
import CalculatorDescription from "../components/CalculatorDescription";

export default function InstallmentCalculatorPage() {
  return (
    <>
      <section>
        <CalculatorDescription title="Installment Calculator">
          <p>
            An installment loan is a type of agreement or contract involving a
            loan that is repaid over time with a set number of scheduled
            payments; normally at least two payments are made towards the
            loan. The term of loan may be as little as a few months and as long
            as 30 years. A mortgage loan, for example, is a type of installment
            loan.
          </p>
        </CalculatorDescription>
      </section>
      <section>
        <InstallmentCalculator />
      </section>
    </>
  );
}
