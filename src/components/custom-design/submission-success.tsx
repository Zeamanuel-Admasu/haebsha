import Link from "next/link";
import { useLanguage } from "@/lib/language";

export function SubmissionSuccess({ email }: { email: string }) {
  const { t } = useLanguage();

  return (
    <section className="custom-success" aria-labelledby="success-title">
      <p className="eyebrow">{t("custom.success.eyebrow")}</p>
      <h1 id="success-title">{t("custom.success.title")}</h1>
      <p>
        {t("custom.success.copyStart")} <strong>{email}</strong> {t("custom.success.copyEnd")}
      </p>
      <div className="success-ticket">
        <span>{t("custom.success.ticket")}</span>
        <strong>#CR-0001</strong>
        <p>{t("custom.success.status")}</p>
      </div>
      <p>{t("custom.success.next")}</p>
      <div className="success-actions">
        <Link href="/" className="secondary-link">{t("custom.success.home")}</Link>
        <Link href="/shop" className="primary-link">{t("custom.success.explore")}</Link>
      </div>
    </section>
  );
}
