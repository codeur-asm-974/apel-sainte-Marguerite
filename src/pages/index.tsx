import { Container } from "@/ui/components/container/container";
import { Navigation } from "@/ui/components/navigation/navigation";
import { Seo } from "@/ui/components/seo/seo";

export default function Home() {
  return (
    <>
      <Seo
        title="Apel Sainte-Marguerite"
        description="Assocition Parent d'éléve"
      />
      <Navigation />
    </>
  );
}
