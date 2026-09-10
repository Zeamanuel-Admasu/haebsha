import { MeasurementZone } from "@/features/measurements/data/measurement-fields";

export type MeasurementUnit = "in" | "cm";

export type ReferenceImage = {
  id: string;
  file: File;
  previewUrl: string;
};

export type CustomDesignForm = {
  references: ReferenceImage[];
  referenceUrl: string;
  garmentType: string;
  preferredColor: string;
  instructions: string;
  eventDate: string;
  recipient: {
    name: string;
    label: string;
  };
  measurementUnit: MeasurementUnit;
  measurements: Record<MeasurementZone, string>;
  measurementsConfirmed: boolean;
  contact: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
};

export type ValidationErrors = Partial<Record<string, string>>;
