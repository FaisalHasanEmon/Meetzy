import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import AuthProvider from "./Provider/AuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
   
     <AuthProvider>
      {/* <QueryClientProvider client={queryClient}>  */}
      <div className="max-w-screen-xl mx-auto">
          <RouterProvider router={router} />
        </div>
      {/* </QueryClientProvider> */}
    </AuthProvider>
  </StrictMode>
);
