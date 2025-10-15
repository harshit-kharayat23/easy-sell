import Navbar from "../components/navbar";

export default function appLayout({children}){

    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}