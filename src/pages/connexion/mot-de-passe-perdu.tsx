import { Seo } from "@/ui/components/seo/seo";

import { Layout } from "@/ui/components/layout";
import { ForgetPasswordContainer } from "@/ui/modules/authentification/forget-password/forget-password.container";

export default function ForgetPassword() {
  return (
    <>
      <Seo
        title="connexion apel Sainte Sarguerite"
        description="Page d'inscription"
      />

      <Layout>
        <ForgetPasswordContainer />
      </Layout>
    </>
  );
}
