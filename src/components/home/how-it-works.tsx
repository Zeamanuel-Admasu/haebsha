const steps = [
  ["01", "Choose or send your design"],
  ["02", "Receive your custom price"],
  ["03", "Confirm your measurements"],
  ["04", "We make it and deliver it"]
];

export function HowItWorks() {
  return (
    <section className="section process-section" aria-labelledby="process-title">
      <div className="section-heading reveal-up">
        <p className="eyebrow">How it works</p>
        <h2 id="process-title">A considered path from idea to garment.</h2>
      </div>
      <ol className="process-list">
        {steps.map(([number, label]) => (
          <li className="process-step" key={number}>
            <span>{number}</span>
            <p>{label}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
