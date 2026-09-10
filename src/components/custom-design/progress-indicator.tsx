type Step = {
  label: string;
};

export function ProgressIndicator({
  steps,
  activeIndex,
  highestVisitedIndex,
  ariaLabel,
  onSelect
}: {
  steps: Step[];
  activeIndex: number;
  highestVisitedIndex: number;
  ariaLabel: string;
  onSelect: (index: number) => void;
}) {
  return (
    <nav className="custom-progress" aria-label={ariaLabel}>
      {steps.map((step, index) => {
        const isActive = index === activeIndex;
        const isAvailable = index <= highestVisitedIndex;

        return (
          <button
            type="button"
            key={step.label}
            className={isActive ? "is-active" : ""}
            disabled={!isAvailable}
            aria-current={isActive ? "step" : undefined}
            onClick={() => onSelect(index)}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            {step.label}
          </button>
        );
      })}
    </nav>
  );
}
