import { Breadcrumbs } from "./breadCrumbs/breadcrumbs";
import { Footer } from "./navigation/footer";
import { Navigations } from "./navigation/navigations";

interface Props {
  children: React.ReactNode;
  isDisplayBreadcrumbs?: boolean;
}

export const Layout = ({ children, isDisplayBreadcrumbs = true }: Props) => {
  return (
    <div>
      <Navigations />
      {isDisplayBreadcrumbs && <Breadcrumbs />}
      {children}
      <Footer />
    </div>
  );
};
