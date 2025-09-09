import { RouterProvider } from "react-router-dom";
import router from "./app/routes/routes";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./app/api/queryClient";
import { Provider } from "react-redux";
import { store } from "./app/store/store";
import { ThemeProvider } from "./app/providers/theme-provider";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <Toaster />
          </QueryClientProvider>
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
