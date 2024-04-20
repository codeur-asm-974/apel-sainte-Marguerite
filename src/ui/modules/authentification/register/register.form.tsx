import { FormsType } from "@/types/form";
import { Button } from "@/ui/design-systeme/button/button";
import { Input } from "@/ui/design-systeme/forms/input";
interface Props {
  form: FormsType;
}

export const RegisterForm = ({ form }: Props) => {
  const { onSubmit, errors, isLoading, register, handleSubmit } = form;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pt-8 pb-5 space-y-4">
      <Input
        isLoading={isLoading}
        placeholder="johndoe@gmail.com"
        type="email"
        register={register}
        errors={errors}
        errorMsg="tu dois renseigner ce champs"
        id="email"
      />
      <Input
        isLoading={isLoading}
        placeholder="Mot de passe"
        type="password"
        register={register}
        errors={errors}
        errorMsg="tu dois renseigner ce champs"
        id="password"
      />
      <Input
        isLoading={isLoading}
        placeholder="entrer le numero élève"
        register={register}
        errors={errors}
        errorMsg="tu dois renseigner ce champs"
        id="how_did_hear"
      />
      <Button isLoading={isLoading} type="submit" fullWith>
        S&apos;inscrire
      </Button>
    </form>
  );
};
