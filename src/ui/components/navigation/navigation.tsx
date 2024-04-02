import { Logo } from "@/ui/design-systeme/logo/logo";
import { Container } from "../container/container";
import { Typography } from "@/ui/design-systeme/typography/typography";
import { Button } from "@/ui/design-systeme/button/button";

export const Navigation = () => {
  return (
    <div className="border-b-2 border-orange-400 bg-orange-200">
      <Container className="py-2 flex items-center justify-between gap-7">
        <div className="flex items-end gap-2">
          <Logo size="large" />
          <div>
            <Typography variant="body-sm" theme="primary" component="span">
              Association de Parents d’élèves de l’Enseignement Libre
            </Typography>
          </div>
        </div>

        <div className="flex items-center gap-7">
          <Typography
            theme="primary"
            variant="caption2"
            component="div"
            className="flex items-center gap-7"
          >
            <span>contact</span>
            <span>Actualité</span>
          </Typography>
          <div className="flex items-center gap-2">
            <Button>Vos accès</Button>
            <Button>Conexion</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
