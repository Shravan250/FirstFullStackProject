import "../styles/global.css";
import Layout from "../components/layout";

function MyApp({ Components , pageProps}){
    return(
        <Layout>
            <Component { ...pageProps}/>
        </Layout>
    )
}

export default MyApp