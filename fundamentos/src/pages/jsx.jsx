import Layout from "../components/Layout";
export default function Jsx(){
    const a = 1;
    const b = 3;
    return(
        <div><Layout titulo="Exemplo JSX">
            <h1>
                OLá
            </h1>
            {a * b}
            </Layout>
        </div>
        
    )
}