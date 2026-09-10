import { TranslationKey, useLanguage } from "@/lib/language";
import { CustomDesignForm, ValidationErrors } from "./types";

const garmentTypes = [
  { value: "Women's Dress", labelKey: "custom.garment.womensDress" },
  { value: "Women's Two-Piece", labelKey: "custom.garment.womensTwoPiece" },
  { value: "Men's Outfit", labelKey: "custom.garment.mens" },
  { value: "Children's Outfit", labelKey: "custom.garment.children" },
  { value: "Other", labelKey: "custom.garment.other" }
] satisfies Array<{ value: string; labelKey: TranslationKey }>;

export function DesignDetailsStep({
  form,
  errors,
  updateForm
}: {
  form: CustomDesignForm;
  errors: ValidationErrors;
  updateForm: (updates: Partial<CustomDesignForm>) => void;
}) {
  const { t } = useLanguage();

  return (
    <section className="custom-step" aria-labelledby="details-step-title">
      <p className="eyebrow">{t("custom.details.eyebrow")}</p>
      <h1 id="details-step-title">{t("custom.details.title")}</h1>
      <p>{t("custom.details.copy")}</p>

      <fieldset className="choice-fieldset">
        <legend>{t("custom.details.garmentType")}</legend>
        <div className="garment-choice-grid">
          {garmentTypes.map((type) => (
            <button
              type="button"
              key={type.value}
              className={form.garmentType === type.value ? "is-selected" : ""}
              onClick={() => updateForm({ garmentType: type.value })}
            >
              {t(type.labelKey)}
            </button>
          ))}
        </div>
        {errors.garmentType ? <p className="field-error">{errors.garmentType}</p> : null}
      </fieldset>

      <label className="field">
        <span>{t("custom.details.color")}</span>
        <input
          type="text"
          placeholder={t("custom.details.colorPlaceholder")}
          value={form.preferredColor}
          onChange={(event) => updateForm({ preferredColor: event.target.value })}
        />
      </label>

      <label className="field">
        <span>{t("custom.details.instructions")}</span>
        <textarea
          rows={5}
          placeholder={t("custom.details.instructionsPlaceholder")}
          value={form.instructions}
          onChange={(event) => updateForm({ instructions: event.target.value })}
        />
      </label>
      {errors.instructions ? <p className="field-error">{errors.instructions}</p> : null}

      <label className="field">
        <span>{t("custom.details.eventDate")}</span>
        <input
          type="date"
          value={form.eventDate}
          onChange={(event) => updateForm({ eventDate: event.target.value })}
        />
        <small>{t("custom.details.timeline")}</small>
      </label>
    </section>
  );
}
