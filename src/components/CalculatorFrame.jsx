export default function CalculatorFrame({title, children}) {
  return (
    <form className="flex flex-col items-stretch bg-white rounded-md w-96 ring-1 ring-gray-900 ring-opacity-5 shadow-sm text-slate-800">
      <header className="flex items-center h-8 bg-slate-100">
        <h2 className="flex-grow text-lg font-semibold text-center">{title}</h2>
      </header>
      <section className="flex-grow px-4 py-5 bg-white space-y-2 sm:p-6">
        {children}
      </section>
    </form>
  );
}
