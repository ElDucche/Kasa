import { Link, useRouteError } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

export default function ErrorPage() {
    const error = useRouteError();
    console.log(error)

    return (
        <div className="">
            <div className="w-11/12 mx-auto">
                <Navbar />
                <div className="grid w-4/5 h-screen mx-auto place-items-center">
                    <h1 className="text-[12rem] font-bold text-primary">{(error as {status?: number}).status}</h1>
                    <h2 className="text-3xl text-primary font-medium text-center">
                        {
                            (error as {status?: number}).status === 404 ? "Oups la page que vous demandez n'existe pas" : (error as {data?: string}).data
                        }
                        
                    </h2>
                    <Link to={'/'} className="text-xl no-underline hover:underline text-black font-medium">Retourner sur la page d'accueil</Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}