import Layout from "../components/Layout";
import Calendario from "../components/Calendario"
import router, {useRouter} from "next/router"

export default function init(){
    return(
    <>
    <Layout titulo="calendario" subtitulo="subtitulo de Calendario">
       <h2>Texto com conteudo de ajuda</h2>

       <Calendario />
   
    </Layout>

    
    </>

    

    )
}