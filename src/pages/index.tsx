import { Container } from "@/ui/components/container/container";
import { Footer } from "@/ui/components/navigation/footer";

import { Navigations } from "@/ui/components/navigation/navigations";
import { Seo } from "@/ui/components/seo/seo";

export default function Home() {
  return (
    <>
      <Seo
        title="Apel Sainte-Marguerite"
        description="Assocition Parent d'éléve"
      />
      <Navigations />
      <Container className="py-60">apel</Container>
      <Footer />
    </>
  );
}
