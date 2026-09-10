"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { TranslationKey, useLanguage } from "@/lib/language";
import { womensDressMeasurements } from "@/features/measurements/data/measurement-fields";
import { ContactStep } from "./contact-step";
import { DesignDetailsStep } from "./design-details-step";
import { DesignReferenceStep } from "./design-reference-step";
import { MeasurementHelpModal } from "./measurement-help-modal";
import { MeasurementsStep } from "./measurements-step";
import { ProgressIndicator } from "./progress-indicator";
import { RecipientStep } from "./recipient-step";
import { ReviewStep } from "./review-step";
import { SubmissionSuccess } from "./submission-success";
import { CustomDesignForm, ReferenceImage, ValidationErrors } from "./types";
import { MeasurementField, MeasurementZone } from "@/features/measurements/data/measurement-fields";

const steps = [
  { labelKey: "custom.progress.design" },
  { labelKey: "custom.progress.details" },
  { labelKey: "custom.progress.for" },
  { labelKey: "custom.progress.measurements" },
  { labelKey: "custom.progress.contact" },
  { labelKey: "custom.progress.review" }
] satisfies Array<{ labelKey: TranslationKey }>;

const emptyMeasurements = womensDressMeasurements.reduce(
  (values, field) => ({
    ...values,
    [field.key]: ""
  }),
  {} as CustomDesignForm["measurements"]
);

const initialForm: CustomDesignForm = {
  references: [],
  referenceUrl: "",
  garmentType: "",
  preferredColor: "",
  instructions: "",
  eventDate: "",
  recipient: {
    name: "",
    label: ""
  },
  measurementUnit: "in",
  measurements: emptyMeasurements,
  measurementsConfirmed: false,
  contact: {
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  }
};

export function CustomDesignFlow() {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);
  const [highestVisitedStep, setHighestVisitedStep] = useState(0);
  const [form, setForm] = useState<CustomDesignForm>(initialForm);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [activeMeasurementKey, setActiveMeasurementKey] = useState<MeasurementZone>("bust");
  const [helpField, setHelpField] = useState<MeasurementField | null>(null);
  const [videoOpen, setVideoOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const stepRef = useRef<HTMLDivElement>(null);
  const referencesRef = useRef<ReferenceImage[]>([]);

  const fields = womensDressMeasurements;

  useEffect(() => {
    referencesRef.current = form.references;
  }, [form.references]);

  useEffect(() => {
    return () => {
      referencesRef.current.forEach((reference) => URL.revokeObjectURL(reference.previewUrl));
    };
  }, []);

  useEffect(() => {
    const element = stepRef.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.fromTo(
      element,
      { autoAlpha: 0, y: 18 },
      { autoAlpha: 1, y: 0, duration: 0.42, ease: "power3.out" }
    );
  }, [activeStep, submitted]);

  const activeVisual = useMemo(() => {
    const visuals = [
      {
        src: "/images/source/4k/ethiopian-store-photo-1-4k.jpg",
        headingKey: "custom.visual.0.heading",
        copyKey: "custom.visual.0.copy"
      },
      {
        src: "/images/source/4k/ethiopian-store-photo-2-4k.jpg",
        headingKey: "custom.visual.1.heading",
        copyKey: "custom.visual.1.copy"
      },
      {
        src: "/images/source/4k/ethiopian-store-photo-3-4k.jpg",
        headingKey: "custom.visual.2.heading",
        copyKey: "custom.visual.2.copy"
      },
      {
        src: "/images/source/4k/ethiopian-store-photo-2-4k.jpg",
        headingKey: "custom.visual.3.heading",
        copyKey: "custom.visual.3.copy"
      },
      {
        src: "/images/source/4k/ethiopian-store-photo-1-4k.jpg",
        headingKey: "custom.visual.4.heading",
        copyKey: "custom.visual.4.copy"
      },
      {
        src: "/images/source/4k/ethiopian-store-photo-3-4k.jpg",
        headingKey: "custom.visual.5.heading",
        copyKey: "custom.visual.5.copy"
      }
    ] satisfies Array<{ src: string; headingKey: TranslationKey; copyKey: TranslationKey }>;

    return visuals[activeStep] ?? visuals[0];
  }, [activeStep]);

  const updateForm = (updates: Partial<CustomDesignForm>) => {
    setForm((current) => ({ ...current, ...updates }));
  };

  const addReferences = (files: FileList | File[]) => {
    const selectedFiles = Array.from(files).filter((file) =>
      ["image/jpeg", "image/png", "image/webp"].includes(file.type)
    );

    if (!selectedFiles.length) return;

    setForm((current) => ({
      ...current,
      references: [
        ...current.references,
        ...selectedFiles.map<ReferenceImage>((file) => ({
          id: crypto.randomUUID(),
          file,
          previewUrl: URL.createObjectURL(file)
        }))
      ]
    }));
  };

  const removeReference = (id: string) => {
    setForm((current) => {
      const removed = current.references.find((reference) => reference.id === id);
      if (removed) URL.revokeObjectURL(removed.previewUrl);

      return {
        ...current,
        references: current.references.filter((reference) => reference.id !== id)
      };
    });
  };

  const validateStep = (stepIndex: number) => {
    const nextErrors: ValidationErrors = {};
    const hasReference = form.references.length > 0 || Boolean(form.referenceUrl.trim());
    const hasAdequateInstructions = form.instructions.trim().length >= 18;

    if (stepIndex === 0 && !hasReference && !hasAdequateInstructions) {
      nextErrors.designSource =
        t("custom.validation.designSource");
    }

    if (stepIndex === 1) {
      if (!form.garmentType) nextErrors.garmentType = t("custom.validation.garmentType");
      if (!hasReference && !hasAdequateInstructions) {
        nextErrors.instructions = t("custom.validation.instructions");
      }
    }

    if (stepIndex === 2 && !form.recipient.name.trim()) {
      nextErrors.recipientName = t("custom.validation.recipientName");
    }

    if (stepIndex === 3) {
      fields.forEach((field) => {
        if (field.required && !form.measurements[field.key]) {
          nextErrors[`measurement.${field.key}`] = t("custom.validation.measurementRequired");
        }
      });

      if (!form.measurementsConfirmed) {
        nextErrors.measurementsConfirmed = t("custom.validation.measurementsConfirmed");
      }
    }

    if (stepIndex === 4) {
      if (!form.contact.firstName.trim()) nextErrors.firstName = t("custom.validation.firstName");
      if (!form.contact.lastName.trim()) nextErrors.lastName = t("custom.validation.lastName");
      if (!/^\S+@\S+\.\S+$/.test(form.contact.email)) {
        nextErrors.email = t("custom.validation.email");
      }
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const validateAll = () => {
    for (let index = 0; index < steps.length - 1; index += 1) {
      if (!validateStep(index)) {
        setActiveStep(index);
        return false;
      }
    }

    setErrors({});
    return true;
  };

  const goNext = () => {
    if (!validateStep(activeStep)) return;
    const nextStep = Math.min(activeStep + 1, steps.length - 1);
    setActiveStep(nextStep);
    setHighestVisitedStep((current) => Math.max(current, nextStep));
  };

  const goBack = () => {
    setErrors({});
    setActiveStep((current) => Math.max(current - 1, 0));
  };

  const submit = () => {
    if (!validateAll()) {
      setErrors((current) => ({
        ...current,
        submit: t("custom.validation.submit")
      }));
      return;
    }

    setSubmitted(true);
  };

  const renderStep = () => {
    if (submitted) return <SubmissionSuccess email={form.contact.email} />;

    switch (activeStep) {
      case 0:
        return (
          <DesignReferenceStep
            form={form}
            errors={errors}
            updateForm={updateForm}
            addReferences={addReferences}
            removeReference={removeReference}
          />
        );
      case 1:
        return <DesignDetailsStep form={form} errors={errors} updateForm={updateForm} />;
      case 2:
        return <RecipientStep form={form} errors={errors} updateForm={updateForm} />;
      case 3:
        return (
          <MeasurementsStep
            form={form}
            errors={errors}
            fields={fields}
            activeMeasurementKey={activeMeasurementKey}
            setActiveMeasurementKey={setActiveMeasurementKey}
            videoOpen={videoOpen}
            setVideoOpen={setVideoOpen}
            updateForm={updateForm}
            onHelp={setHelpField}
          />
        );
      case 4:
        return <ContactStep form={form} errors={errors} updateForm={updateForm} />;
      default:
        return (
          <ReviewStep
            form={form}
            errors={errors}
            fields={fields}
            onEdit={(index) => {
              setErrors({});
              setActiveStep(index);
            }}
          />
        );
    }
  };

  return (
    <div className="custom-design-page">
      <section className="custom-design-shell">
        <div className="custom-flow-heading">
          <p className="eyebrow">{t("custom.shell.eyebrow")}</p>
          <ProgressIndicator
            steps={steps.map((step) => ({ label: t(step.labelKey) }))}
            activeIndex={activeStep}
            highestVisitedIndex={highestVisitedStep}
            ariaLabel={t("custom.progress.aria")}
            onSelect={(index) => {
              setErrors({});
              setActiveStep(index);
            }}
          />
        </div>

        <div className="custom-flow-layout">
          {!submitted ? (
            <aside className="custom-editorial-panel">
              <Image
                src={activeVisual.src}
                alt=""
                width={1024}
                height={1536}
                sizes="(max-width: 980px) 92vw, 34vw"
                priority
              />
              <div>
                <h2>{t(activeVisual.headingKey)}</h2>
                <p>{t(activeVisual.copyKey)}</p>
              </div>
            </aside>
          ) : null}

          <div className="custom-form-card" ref={stepRef}>
            {renderStep()}
            {!submitted ? (
              <div className="custom-flow-actions">
                <button type="button" className="secondary-link dark-link" onClick={goBack} disabled={activeStep === 0}>
                  {t("custom.nav.back")}
                </button>
                {activeStep === steps.length - 1 ? (
                  <button type="button" className="primary-link dark-link" onClick={submit}>
                    {t("custom.nav.getPrice")}
                  </button>
                ) : (
                  <button type="button" className="primary-link dark-link" onClick={goNext}>
                    {t("custom.nav.continue")}
                  </button>
                )}
              </div>
            ) : null}
          </div>
        </div>
      </section>
      <MeasurementHelpModal field={helpField} onClose={() => setHelpField(null)} />
    </div>
  );
}
