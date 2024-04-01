import { Seo } from "@/ui/components/seo/seo";
import { Button } from "@/ui/design-systeme/button/button";
import { Ri4KFill } from "react-icons/ri";

export default function Home() {
  return (
    <>
      <Seo
        title="Apel Sainte-Marguerite"
        description="Assocition Parent d'éléve"
      />
      <div className="flex items-center gap-4 p-10">
        <Button variant="accent" size="small">
          hello
        </Button>
        <Button variant="secondary" size="large">
          je suis celia
        </Button>
        <Button variant="disabled" size="medium">
          hello
        </Button>

        <Button
          size="small"
          variant="ico"
          icon={{ icon: Ri4KFill }}
          iconTheme="secondary"
        />
        <Button
          size="medium"
          variant="ico"
          icon={{ icon: Ri4KFill }}
          iconTheme="gray"
        />
        <Button
          size="large"
          variant="ico"
          icon={{ icon: Ri4KFill }}
          iconTheme="accent"
        />

        <Button
          size="small"
          icon={{ icon: Ri4KFill }}
          iconPosition="right"
          variant="accent"
        >
          Button
        </Button>
        <Button
          isLoading
          size="medium"
          icon={{ icon: Ri4KFill }}
          iconPosition="left"
          variant="accent"
        >
          patou
        </Button>
      </div>
    </>
  );
}
