import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import { IndexPage } from "./pages/IndexPage";

export function Routes() {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/" element={<IndexPage />} />
      </RouterRoutes>
    </BrowserRouter>
  );
}
