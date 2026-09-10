import type React from "react";
import Image from "next/image";
import { ImagePlus, X } from "lucide-react";
import { useLanguage } from "@/lib/language";
import { CustomDesignForm, ReferenceImage, ValidationErrors } from "./types";

export function DesignReferenceStep({
  form,
  errors,
  updateForm,
  addReferences,
  removeReference
}: {
  form: CustomDesignForm;
  errors: ValidationErrors;
  updateForm: (updates: Partial<CustomDesignForm>) => void;
  addReferences: (files: FileList | File[]) => void;
  removeReference: (id: string) => void;
}) {
  const { t } = useLanguage();

  const onDrop = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    addReferences(event.dataTransfer.files);
  };

  return (
    <section className="custom-step" aria-labelledby="design-step-title">
      <p className="eyebrow">{t("custom.design.eyebrow")}</p>
      <h1 id="design-step-title">{t("custom.design.title")}</h1>
      <p>{t("custom.design.copy")}</p>

      <label
        className="upload-dropzone"
        onDragOver={(event) => event.preventDefault()}
        onDrop={onDrop}
      >
        <input
          type="file"
          accept="image/jpeg,image/png,image/webp"
          multiple
          onChange={(event) => {
            addReferences(event.target.files ?? []);
            event.currentTarget.value = "";
          }}
        />
        <ImagePlus size={28} strokeWidth={1.6} />
        <strong>{t("custom.design.addPhotos")}</strong>
        <span>{t("custom.design.fileTypes")}</span>
        <b>{t("custom.design.choosePhotos")}</b>
      </label>

      {form.references.length ? (
        <div className="reference-preview-grid" aria-label={t("custom.design.previews")}>
          {form.references.map((reference: ReferenceImage) => (
            <figure key={reference.id}>
              <Image src={reference.previewUrl} alt={reference.file.name} width={180} height={220} />
              <button type="button" aria-label={`${t("custom.design.remove")} ${reference.file.name}`} onClick={() => removeReference(reference.id)}>
                <X size={16} />
              </button>
            </figure>
          ))}
        </div>
      ) : null}

      <label className="field">
        <span>{t("custom.design.linkLabel")}</span>
        <input
          type="url"
          placeholder={t("custom.design.linkPlaceholder")}
          value={form.referenceUrl}
          onChange={(event) => updateForm({ referenceUrl: event.target.value })}
        />
      </label>
      {errors.designSource ? <p className="field-error">{errors.designSource}</p> : null}
    </section>
  );
}
