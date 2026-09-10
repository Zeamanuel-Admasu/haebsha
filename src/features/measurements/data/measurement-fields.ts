export type MeasurementZone =
  | "height"
  | "bust"
  | "waist"
  | "hips"
  | "shoulder"
  | "sleeve"
  | "upperArm"
  | "garmentLength";

export type MeasurementField = {
  key: MeasurementZone;
  labelKey: TranslationKey;
  required: boolean;
  zone: MeasurementZone;
  helpTextKey: TranslationKey;
  markerInstructionKey: TranslationKey;
};

// Provisional measurement list. Replace with the tailor's final required fields later.
export const womensDressMeasurements: MeasurementField[] = [
  {
    key: "height",
    labelKey: "custom.measurements.height",
    required: true,
    zone: "height",
    helpTextKey: "custom.measurements.heightHelp",
    markerInstructionKey: "custom.measurements.heightMarker"
  },
  {
    key: "bust",
    labelKey: "custom.measurements.bust",
    required: true,
    zone: "bust",
    helpTextKey: "custom.measurements.bustHelp",
    markerInstructionKey: "custom.measurements.bustMarker"
  },
  {
    key: "waist",
    labelKey: "custom.measurements.waist",
    required: true,
    zone: "waist",
    helpTextKey: "custom.measurements.waistHelp",
    markerInstructionKey: "custom.measurements.waistMarker"
  },
  {
    key: "hips",
    labelKey: "custom.measurements.hips",
    required: true,
    zone: "hips",
    helpTextKey: "custom.measurements.hipsHelp",
    markerInstructionKey: "custom.measurements.hipsMarker"
  },
  {
    key: "shoulder",
    labelKey: "custom.measurements.shoulder",
    required: true,
    zone: "shoulder",
    helpTextKey: "custom.measurements.shoulderHelp",
    markerInstructionKey: "custom.measurements.shoulderMarker"
  },
  {
    key: "sleeve",
    labelKey: "custom.measurements.sleeve",
    required: true,
    zone: "sleeve",
    helpTextKey: "custom.measurements.sleeveHelp",
    markerInstructionKey: "custom.measurements.sleeveMarker"
  },
  {
    key: "upperArm",
    labelKey: "custom.measurements.upperArm",
    required: true,
    zone: "upperArm",
    helpTextKey: "custom.measurements.upperArmHelp",
    markerInstructionKey: "custom.measurements.upperArmMarker"
  },
  {
    key: "garmentLength",
    labelKey: "custom.measurements.garmentLength",
    required: true,
    zone: "garmentLength",
    helpTextKey: "custom.measurements.garmentLengthHelp",
    markerInstructionKey: "custom.measurements.garmentLengthMarker"
  }
];
import type { TranslationKey } from "@/lib/language";
