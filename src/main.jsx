// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import { RouterProvider } from "react-router-dom";
// import { router } from "./Routes/Routes";
// import { AuthContext } from "./Provider/AuthProvider";


// createRoot(document.getElementById("root")).render(
//   <StrictMode>
   
//      <AuthProvider>
//       {/* <QueryClientProvider client={queryClient}>  */}
//       <div className="max-w-screen-xl mx-auto">
//           <RouterProvider router={router} />
//         </div>
//       {/* </QueryClientProvider> */}
//     </AuthProvider>
//   </StrictMode>
// );
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import AuthProvider from "./Provider/AuthProvider"; // ✅ Correct Import

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider> {/* ✅ Now correctly defined */}
      {/* <QueryClientProvider client={queryClient}> */}
      <div className="max-w-full mx-auto">
        <RouterProvider router={router} />
      </div>
      {/* </QueryClientProvider> */}
    </AuthProvider>
  </StrictMode>
);
