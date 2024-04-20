import { Container } from "@/ui/components/container/container";

import { Seo } from "@/ui/components/seo/seo";

import { Layout } from "@/ui/components/layout";
import { LoginContainer } from "@/ui/modules/authentification/login/login.container";

export default function Register() {
  return (
    <>
      <Seo
        title="connexion apel Sainte Sarguerite"
        description="Page d'inscription"
      />

      <Layout>
        <LoginContainer />
      </Layout>
    </>
  );
}
