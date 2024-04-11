import { Footer } from "./navigation/footer";
import { Navigations } from "./navigation/navigations";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <div>
      <Navigations />
      {children}
      <Footer />
    </div>
  );
};
