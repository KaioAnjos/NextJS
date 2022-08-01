import Titulo from "../components/Titulo";
interface LayoutProps{
    titulo: string;
    children: any;
}

export default function Layout(props){
    return(
        <div className="flex flex-col w-2/3 bg-white text-gray-800">
            <Titulo></Titulo>
        </div>
    )
}