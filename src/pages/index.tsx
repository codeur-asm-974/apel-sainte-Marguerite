import { Container } from "@/ui/components/container/container";
import { Navigation } from "@/ui/components/navigation/navigation";
import { Navigations } from "@/ui/components/navigation/navigation2";
import { Seo } from "@/ui/components/seo/seo";

export default function Home() {
  return (
    <>
      <Seo
        title="Apel Sainte-Marguerite"
        description="Assocition Parent d'éléve"
      />
      <Navigations />
    </>
  );
}
