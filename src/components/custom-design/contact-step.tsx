import { useLanguage } from "@/lib/language";
import { CustomDesignForm, ValidationErrors } from "./types";

export function ContactStep({
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
    <section className="custom-step" aria-labelledby="contact-step-title">
      <p className="eyebrow">{t("custom.contact.eyebrow")}</p>
      <h1 id="contact-step-title">{t("custom.contact.title")}</h1>
      <p>{t("custom.contact.copy")}</p>

      <div className="two-column-fields">
        <label className="field">
          <span>{t("custom.contact.firstName")}</span>
          <input
            type="text"
            value={form.contact.firstName}
            onChange={(event) =>
              updateForm({ contact: { ...form.contact, firstName: event.target.value } })
            }
          />
          {errors.firstName ? <small className="field-error">{errors.firstName}</small> : null}
        </label>

        <label className="field">
          <span>{t("custom.contact.lastName")}</span>
          <input
            type="text"
            value={form.contact.lastName}
            onChange={(event) =>
              updateForm({ contact: { ...form.contact, lastName: event.target.value } })
            }
          />
          {errors.lastName ? <small className="field-error">{errors.lastName}</small> : null}
        </label>
      </div>

      <label className="field">
        <span>{t("custom.contact.email")}</span>
        <input
          type="email"
          value={form.contact.email}
          onChange={(event) =>
            updateForm({ contact: { ...form.contact, email: event.target.value } })
          }
        />
        {errors.email ? <small className="field-error">{errors.email}</small> : null}
      </label>

      <label className="field">
        <span>{t("custom.contact.phone")}</span>
        <input
          type="tel"
          value={form.contact.phone}
          onChange={(event) =>
            updateForm({ contact: { ...form.contact, phone: event.target.value } })
          }
        />
      </label>
    </section>
  );
}
