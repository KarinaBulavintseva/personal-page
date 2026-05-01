import { Route, Routes } from "react-router";
import { ThemeProvider } from "./contexts/ThemeProvider";
import { Wrapper, ScrollToTop } from "./components";
import { Layout, HomePage, ProjectPage } from "./pages";

function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <Wrapper>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="favorite-project" element={<ProjectPage />} />
          </Route>
        </Routes>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
