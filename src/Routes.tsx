import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import { IndexPage } from "./pages/IndexPage";

export function Routes() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <RouterRoutes>
        <Route path="/" element={<IndexPage />} />
      </RouterRoutes>
    </BrowserRouter>
  );
}
