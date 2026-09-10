import { Play } from "lucide-react";
import { useLanguage } from "@/lib/language";

export function MeasurementVideoCard({
  isOpen,
  onOpen,
  onClose
}: {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  const { t } = useLanguage();

  return (
    <>
      <div className="measurement-video-card">
        <div>
          <p className="eyebrow">{t("custom.measurements.videoEyebrow")}</p>
          <h3>{t("custom.measurements.videoTitle")}</h3>
          <p>{t("custom.measurements.videoCopy")}</p>
        </div>
        <button type="button" className="video-play-button" onClick={onOpen}>
          <Play size={18} fill="currentColor" />
          {t("custom.measurements.watch")}
        </button>
      </div>

      {isOpen ? (
        <div className="custom-modal-backdrop" role="presentation" onClick={onClose}>
          <div
            className="custom-modal video-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="measurement-video-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button type="button" className="modal-close" onClick={onClose}>
              {t("nav.closeMenu")}
            </button>
            <div className="video-placeholder" aria-hidden="true">
              <Play size={28} fill="currentColor" />
            </div>
            <h3 id="measurement-video-title">{t("custom.measurements.videoTitle")}</h3>
            <p>{t("custom.measurements.videoModalCopy")}</p>
            <button type="button" className="primary-link dark-link" onClick={onClose}>
              {t("custom.measurements.continue")}
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
