import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeRoute from "./routes/HomeRoute";
import LearnRoute, { learnLoader } from "./routes/LearnRoute";
import ProgressRoute, { progressLoader } from "./routes/ProgressRoute";
import SettingsContextProvider from "./store/settings-context";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeRoute />,
    },
    {
      path: "/learn/:verb/:option",
      element: <LearnRoute />,
      loader: learnLoader,
    },
    {
      path: "/progress",
      element: <ProgressRoute />,
      loader: progressLoader,
    },
  ]);

  return (
    <SettingsContextProvider>
      <RouterProvider router={router} />
    </SettingsContextProvider>
  );
}

export default App;
