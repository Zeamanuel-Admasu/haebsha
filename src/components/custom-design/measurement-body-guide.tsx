import type React from "react";
import { MeasurementField, MeasurementZone } from "@/features/measurements/data/measurement-fields";
import { useLanguage } from "@/lib/language";

export function MeasurementBodyGuide({
  fields,
  activeKey,
  onSelect
}: {
  fields: MeasurementField[];
  activeKey: MeasurementZone;
  onSelect: (key: MeasurementZone) => void;
}) {
  const { t } = useLanguage();
  const activeField = fields.find((field) => field.key === activeKey) ?? fields[0];

  const zoneProps = (key: MeasurementZone) => ({
    role: "button",
    tabIndex: 0,
    className: `measurement-zone zone-${key} ${activeKey === key ? "is-active" : ""}`,
    "aria-label": t(fields.find((field) => field.key === key)?.labelKey ?? fields[0].labelKey),
    onClick: () => onSelect(key),
    onKeyDown: (event: React.KeyboardEvent<SVGElement>) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onSelect(key);
      }
    }
  });

  return (
    <div className="measurement-body-guide">
      <svg viewBox="0 0 260 520" aria-label={t("custom.measurements.bodyAria")}>
        <defs>
          <linearGradient id="bodyFill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fff7eb" />
            <stop offset="100%" stopColor="#ead8c1" />
          </linearGradient>
        </defs>
        <path
          className="body-silhouette"
          d="M130 34c22 0 38 17 38 39 0 17-9 31-23 37l5 28 34 13 27 82-26 9-23-58-8 68 21 205h-31l-14-134-16 134H83l22-205-8-68-23 58-26-9 27-82 34-13 5-28c-14-6-23-20-23-37 0-22 17-39 39-39Z"
        />
        <line {...zoneProps("height")} x1="215" y1="35" x2="215" y2="458" />
        <line {...zoneProps("shoulder")} x1="85" y1="144" x2="175" y2="144" />
        <path {...zoneProps("bust")} d="M88 196c27 13 58 13 84 0" />
        <path {...zoneProps("waist")} d="M99 258c21 10 42 10 63 0" />
        <path {...zoneProps("hips")} d="M91 311c26 15 52 15 78 0" />
        <path {...zoneProps("sleeve")} d="M73 160c-15 48-22 80-22 118" />
        <path {...zoneProps("upperArm")} d="M62 196c10 7 21 10 33 8" />
        <line {...zoneProps("garmentLength")} x1="116" y1="145" x2="95" y2="456" />
        <circle className="body-marker" cx="215" cy="35" r="4" />
        <circle className="body-marker" cx="215" cy="458" r="4" />
      </svg>
      <div className="measurement-help-panel">
        <p className="eyebrow">{t("custom.measurements.current")}</p>
        <h3>{t(activeField.labelKey)}</h3>
        <p>{t(activeField.helpTextKey)}</p>
        <span>{t(activeField.markerInstructionKey)}</span>
      </div>
    </div>
  );
}
