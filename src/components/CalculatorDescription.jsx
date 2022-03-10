export default function CalculatorDescription({title, children}) {
  return (
    <section className="text-slate-800">
      <h1 className="mb-5 text-5xl font-semibold">{title}</h1>
      <div className="leading-relaxed space-y-4">
        {children}
      </div>
    </section>
  );
}
