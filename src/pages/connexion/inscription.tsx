import { Seo } from "@/ui/components/seo/seo";

import { Layout } from "@/ui/components/layout";
import { RegisterContainer } from "@/ui/modules/authentification/register/register.container";

export default function Register() {
  return (
    <>
      <Seo
        title="connexion apel Sainte Sarguerite"
        description="Page d'inscription"
      />

      <Layout>
        <RegisterContainer />
      </Layout>
    </>
  );
}
