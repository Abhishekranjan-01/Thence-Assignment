import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import { Suspense, lazy } from "react";

const RegistrationForm = lazy(() =>
  import("./Components/ReigtrationForm/RegistrationForm")
);
const SuccessPage = lazy(() => import("./Components/SuccessPage/SuccessPage"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/Registration+Form"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <RegistrationForm />
            </Suspense>
          }
        />
        <Route
          path="/Success+Page"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <SuccessPage />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
