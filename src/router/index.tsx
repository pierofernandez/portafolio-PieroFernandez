import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../Layout/RootLayout";
import { HomePage } from "../pages";
import { Contact } from "../pages/Contact";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'contact', // Ruta /contact
                element: <Contact />
            }
        ]
    },
],
);
export default router;