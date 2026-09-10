import { CustomDesignFlow } from "@/components/custom-design/custom-design-flow";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export default function CustomPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <CustomDesignFlow />
      </main>
      <SiteFooter />
    </>
  );
}
