import { Info } from "lucide-react";
import { MeasurementField, MeasurementZone } from "@/features/measurements/data/measurement-fields";
import { useLanguage } from "@/lib/language";
import { CustomDesignForm, MeasurementUnit, ValidationErrors } from "./types";
import { MeasurementBodyGuide } from "./measurement-body-guide";
import { MeasurementVideoCard } from "./measurement-video-card";

export function MeasurementsStep({
  form,
  errors,
  fields,
  activeMeasurementKey,
  videoOpen,
  setVideoOpen,
  setActiveMeasurementKey,
  updateForm,
  onHelp
}: {
  form: CustomDesignForm;
  errors: ValidationErrors;
  fields: MeasurementField[];
  activeMeasurementKey: MeasurementZone;
  videoOpen: boolean;
  setVideoOpen: (isOpen: boolean) => void;
  setActiveMeasurementKey: (key: MeasurementZone) => void;
  updateForm: (updates: Partial<CustomDesignForm>) => void;
  onHelp: (field: MeasurementField) => void;
}) {
  const { t } = useLanguage();

  const updateMeasurement = (key: MeasurementZone, value: string) => {
    updateForm({
      measurements: {
        ...form.measurements,
        [key]: value
      }
    });
  };

  const setUnit = (unit: MeasurementUnit) => {
    updateForm({ measurementUnit: unit });
  };

  return (
    <section className="custom-step" aria-labelledby="measurements-step-title">
      <p className="eyebrow">{t("custom.measurements.eyebrow")}</p>
      <h1 id="measurements-step-title">{t("custom.measurements.title")}</h1>
      <p>{t("custom.measurements.copy")}</p>

      <MeasurementVideoCard
        isOpen={videoOpen}
        onOpen={() => setVideoOpen(true)}
        onClose={() => setVideoOpen(false)}
      />

      <div className="measurement-assistant">
        <MeasurementBodyGuide
          fields={fields}
          activeKey={activeMeasurementKey}
          onSelect={setActiveMeasurementKey}
        />

        <div className="measurement-form-panel">
          <fieldset className="unit-selector">
            <legend>{t("custom.measurements.unit")}</legend>
            {(["in", "cm"] as MeasurementUnit[]).map((unit) => (
              <button
                type="button"
                key={unit}
                className={form.measurementUnit === unit ? "is-selected" : ""}
                onClick={() => setUnit(unit)}
              >
                {unit === "in" ? t("custom.measurements.inches") : t("custom.measurements.centimeters")}
              </button>
            ))}
          </fieldset>

          <div className="measurement-field-list">
            {fields.map((field) => (
              <label
                className={`measurement-field ${
                  activeMeasurementKey === field.key ? "is-active" : ""
                }`}
                key={field.key}
                onMouseEnter={() => setActiveMeasurementKey(field.key)}
              >
                <span>
                  {t(field.labelKey)}
                  <button
                    type="button"
                    onClick={(event) => {
                      event.preventDefault();
                      onHelp(field);
                    }}
                  >
                    <Info size={14} />
                    {t("custom.measurements.how")}
                  </button>
                </span>
                <div>
                  <input
                    type="number"
                    min="0"
                    step="0.25"
                    inputMode="decimal"
                    value={form.measurements[field.key] ?? ""}
                    onFocus={() => setActiveMeasurementKey(field.key)}
                    onChange={(event) => updateMeasurement(field.key, event.target.value)}
                    aria-describedby={`${field.key}-unit`}
                  />
                  <strong id={`${field.key}-unit`}>{form.measurementUnit}</strong>
                </div>
                {errors[`measurement.${field.key}`] ? (
                  <small className="field-error">{errors[`measurement.${field.key}`]}</small>
                ) : null}
              </label>
            ))}
          </div>

          <label className="measurement-confirmation">
            <input
              type="checkbox"
              checked={form.measurementsConfirmed}
              onChange={(event) => updateForm({ measurementsConfirmed: event.target.checked })}
            />
            <span>
              {t("custom.measurements.confirm")}
            </span>
          </label>
          {errors.measurementsConfirmed ? (
            <p className="field-error">{errors.measurementsConfirmed}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
