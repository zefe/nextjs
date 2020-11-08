import Head from 'next/head';
import Navigation from '../components/navigation';
import Index from '../pages';

const Layout = (props) => (
    <div>
        <Head>
            <title>Next.js Project</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/cosmo/bootstrap.min.css"></link>
        </Head>
        <Navigation/>
        <div className="container p-4">
            {props.children}
        </div>
    </div>
)

export default Layout;

