import { Link, useRouteError } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <div className="min-h-screen grid content-between">
            <div className="w-11/12 mx-auto h-full">
                <Navbar />
                <div className="grid w-4/5 mx-auto place-items-center gap-8">
                    <h1 className="text-[12rem] font-bold text-primary">{(error as {status?: number}).status || '404'}</h1>
                    <h2 className="text-3xl text-primary font-medium text-center">
                        {
                            (error as {status?: number}).status === 404 ? "Oups la page que vous demandez n'existe pas" : (error as {data?: string}).data || "Oups la page que vous demandez n'existe pas"
                        }                     
                    </h2>
                    <Link to={'/'} className="text-xl no-underline hover:underline text-black font-medium">Retourner sur la page d'accueil</Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}