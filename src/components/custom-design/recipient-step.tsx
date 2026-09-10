import { useLanguage } from "@/lib/language";
import { CustomDesignForm, ValidationErrors } from "./types";

export function RecipientStep({
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
    <section className="custom-step" aria-labelledby="recipient-step-title">
      <p className="eyebrow">{t("custom.recipient.eyebrow")}</p>
      <h1 id="recipient-step-title">{t("custom.recipient.title")}</h1>
      <p>{t("custom.recipient.copy")}</p>

      <label className="field">
        <span>{t("custom.recipient.name")}</span>
        <input
          type="text"
          placeholder={t("custom.recipient.namePlaceholder")}
          value={form.recipient.name}
          onChange={(event) =>
            updateForm({ recipient: { ...form.recipient, name: event.target.value } })
          }
        />
      </label>
      {errors.recipientName ? <p className="field-error">{errors.recipientName}</p> : null}

      <label className="field">
        <span>{t("custom.recipient.label")}</span>
        <input
          type="text"
          placeholder={t("custom.recipient.labelPlaceholder")}
          value={form.recipient.label}
          onChange={(event) =>
            updateForm({ recipient: { ...form.recipient, label: event.target.value } })
          }
        />
      </label>
    </section>
  );
}
