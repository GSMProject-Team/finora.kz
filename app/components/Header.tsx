export default function Header() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-10 py-8 text-center">
      <h1 className="text-4xl font-semibold tracking-tight text-white">
        FINORA
      </h1>

      <p className="mt-2 text-white/70">
        Tech / Finance / Legal platform
      </p>

      <button className="mt-6 rounded-lg bg-blue-500 px-5 py-2 text-sm font-medium text-white hover:bg-blue-600">
        Start consultation
      </button>
    </div>
  );
}
