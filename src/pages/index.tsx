import { Container } from "@/ui/components/container/container";

import { Seo } from "@/ui/components/seo/seo";

import InputModal from "@/ui/components/blog/InputModal";
import Blog from "@/ui/components/blog/blog";
import { Layout } from "@/ui/components/layout";
import { LandingPageContainer } from "@/ui/modules/landing-page/component/landing-page-container";

export default function Home() {
  return (
    <>
      <Seo
        title="Apel Sainte-Marguerite"
        description="Assocition Parent d'éléve"
      />

      <Layout>
        <LandingPageContainer />
      </Layout>
    </>
  );
}
