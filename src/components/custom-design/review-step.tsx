import Image from "next/image";
import { MeasurementField } from "@/features/measurements/data/measurement-fields";
import { TranslationKey, useLanguage } from "@/lib/language";
import { CustomDesignForm, ValidationErrors } from "./types";

const garmentTypeLabels: Record<string, TranslationKey> = {
  "Women's Dress": "custom.garment.womensDress",
  "Women's Two-Piece": "custom.garment.womensTwoPiece",
  "Men's Outfit": "custom.garment.mens",
  "Children's Outfit": "custom.garment.children",
  Other: "custom.garment.other"
};

export function ReviewStep({
  form,
  errors,
  fields,
  onEdit
}: {
  form: CustomDesignForm;
  errors: ValidationErrors;
  fields: MeasurementField[];
  onEdit: (stepIndex: number) => void;
}) {
  const { t } = useLanguage();
  const garmentTypeLabel = form.garmentType
    ? t(garmentTypeLabels[form.garmentType] ?? "custom.garment.other")
    : t("custom.review.notProvided");

  return (
    <section className="custom-step review-step" aria-labelledby="review-step-title">
      <p className="eyebrow">{t("custom.review.eyebrow")}</p>
      <h1 id="review-step-title">{t("custom.review.title")}</h1>
      <p>{t("custom.review.copy")}</p>
      {errors.submit ? <p className="field-error">{errors.submit}</p> : null}

      <div className="review-block">
        <div>
          <h2>{t("custom.review.design")}</h2>
          <button type="button" onClick={() => onEdit(0)}>{t("custom.review.editDesign")}</button>
        </div>
        {form.references.length ? (
          <div className="review-images">
            {form.references.map((reference) => (
              <Image key={reference.id} src={reference.previewUrl} alt={reference.file.name} width={120} height={140} />
            ))}
          </div>
        ) : null}
        <dl>
          <dt>{t("custom.review.referenceLink")}</dt>
          <dd>{form.referenceUrl || t("custom.review.notProvided")}</dd>
          <dt>{t("custom.review.garmentType")}</dt>
          <dd>{garmentTypeLabel}</dd>
          <dt>{t("custom.review.color")}</dt>
          <dd>{form.preferredColor || t("custom.review.notProvided")}</dd>
          <dt>{t("custom.review.instructions")}</dt>
          <dd>{form.instructions || t("custom.review.notProvided")}</dd>
          <dt>{t("custom.review.neededFor")}</dt>
          <dd>{form.eventDate || t("custom.review.noDate")}</dd>
        </dl>
      </div>

      <div className="review-block">
        <div>
          <h2>{t("custom.review.madeFor")}</h2>
          <button type="button" onClick={() => onEdit(2)}>{t("custom.review.editRecipient")}</button>
        </div>
        <p>{form.recipient.name || t("custom.review.notProvided")}</p>
        {form.recipient.label ? <span>{form.recipient.label}</span> : null}
      </div>

      <div className="review-block">
        <div>
          <h2>{t("custom.review.measurements")}</h2>
          <button type="button" onClick={() => onEdit(3)}>{t("custom.review.editMeasurements")}</button>
        </div>
        <dl>
          {fields.map((field) => (
            <div key={field.key}>
              <dt>{t(field.labelKey)}</dt>
              <dd>
                {form.measurements[field.key]
                  ? `${form.measurements[field.key]} ${form.measurementUnit}`
                  : t("custom.review.missing")}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="review-block">
        <div>
          <h2>{t("custom.review.contact")}</h2>
          <button type="button" onClick={() => onEdit(4)}>{t("custom.review.editContact")}</button>
        </div>
        <p>
          {form.contact.firstName} {form.contact.lastName}
        </p>
        <span>{form.contact.email || t("custom.review.emailMissing")}</span>
        {form.contact.phone ? <span>{form.contact.phone}</span> : null}
      </div>
    </section>
  );
}
