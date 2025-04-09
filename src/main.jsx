
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import AuthProvider from "./Provider/AuthProvider"; 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider> {/* ✅ Now correctly defined */}
      {/* <QueryClientProvider client={queryClient}> */}

        <RouterProvider router={router} />
  
      {/* </QueryClientProvider> */}
    </AuthProvider>
  </StrictMode>
);
