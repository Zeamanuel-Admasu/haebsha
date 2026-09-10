"use client";

import { useLanguage } from "@/lib/language";

const steps = [
  ["01", "process.step1"],
  ["02", "process.step2"],
  ["03", "process.step3"],
  ["04", "process.step4"]
] as const;

export function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section className="section process-section" aria-labelledby="process-title">
      <div className="section-heading reveal-up">
        <p className="eyebrow">{t("process.eyebrow")}</p>
        <h2 id="process-title">{t("process.title")}</h2>
      </div>
      <ol className="process-list">
        {steps.map(([number, labelKey]) => (
          <li className="process-step" key={number}>
            <span>{number}</span>
            <p>{t(labelKey)}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
