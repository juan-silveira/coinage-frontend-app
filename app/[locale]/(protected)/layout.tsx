import LayoutProvider from "@/providers/layout.provider";
import LayoutContentProvider from "@/providers/content.provider";
import DashCodeSidebar from "@/components/partials/sidebar";
import DashCodeFooter from "@/components/partials/footer";
import ThemeCustomize from "@/components/partials/customizer";
import DashCodeHeader from "@/components/partials/header";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";

const layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <ProtectedRoute>
      <LayoutProvider>
        <ThemeCustomize />
        <DashCodeHeader />
        <DashCodeSidebar />
        <LayoutContentProvider>{children}</LayoutContentProvider>
        <DashCodeFooter />
      </LayoutProvider>
    </ProtectedRoute>
  );
};

export default layout;
