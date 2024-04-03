import { Container } from "@/ui/components/container/container";
import { Navigations } from "@/ui/components/navigation/navigations";
import { Seo } from "@/ui/components/seo/seo";
import { Avatar } from "@/ui/design-systeme/avatar/avatar";
import { Button } from "@/ui/design-systeme/button/button";
import { Logo } from "@/ui/design-systeme/logo/logo";
import { Spinner } from "@/ui/design-systeme/spinner/spinner";
import { Ri4KFill } from "react-icons/ri";

export default function Home() {
  return (
    <>
      <Seo
        title="Apel Sainte-Marguerite"
        description="Assocition Parent d'éléve"
      />
      <Container>
        <Navigations />

        <Spinner />

        <div className="flex items-center gap-4 p-10">
          <Avatar
            src="/assets/images/Logo_AS_Monaco_FC_-_2021.svg.png"
            alt="logo apel "
            size="small"
          />
          <Avatar
            src="/assets/images/Logo_AS_Monaco_FC_-_2021.svg.png"
            alt="logo apel "
            size="medium"
          />
          <Avatar
            src="/assets/images/Logo_AS_Monaco_FC_-_2021.svg.png"
            alt="logo apel "
            size="large"
          />
          <Avatar
            src="/assets/images/Logo_AS_Monaco_FC_-_2021.svg.png"
            alt="logo apel "
            size="extra-large"
          />

          <Logo size="small" />
          <Logo size="medium" />
          <Logo size="large" />

          <Button variant="accent" size="small">
            hello
          </Button>
          <Button isLoading variant="secondary" size="large">
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
      </Container>
    </>
  );
}
