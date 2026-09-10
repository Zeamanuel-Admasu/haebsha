import { MeasurementField } from "@/features/measurements/data/measurement-fields";
import { useLanguage } from "@/lib/language";

export function MeasurementHelpModal({
  field,
  onClose
}: {
  field: MeasurementField | null;
  onClose: () => void;
}) {
  const { t } = useLanguage();

  if (!field) return null;

  return (
    <div className="custom-modal-backdrop" role="presentation" onClick={onClose}>
      <div
        className="custom-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="measurement-help-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="modal-close" onClick={onClose}>
          {t("nav.closeMenu")}
        </button>
        <div className="help-illustration" aria-hidden="true">
          <span />
        </div>
        <p className="eyebrow">{t("custom.measurements.helpTitle")}</p>
        <h3 id="measurement-help-title">{t(field.labelKey)}</h3>
        <p>{t(field.helpTextKey)}</p>
        <p>{t(field.markerInstructionKey)}</p>
        <button type="button" className="primary-link dark-link" onClick={onClose}>
          {t("custom.measurements.gotIt")}
        </button>
      </div>
    </div>
  );
}
