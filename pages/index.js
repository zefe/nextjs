import Head from 'next/head';
import Layout from '../components/layout';
import fetch from 'isomorphic-fetch';
import Users from '../components/Users';

const Index = (props) => {
    console.log(props)
    return (
        <div>
            <Head>
                <title>
                    Next.js Project - Home
                </title>
            </Head>
            <Layout>
                <h1>Nextjs</h1>
                <Users users={props.users}/>
            </Layout>
        </div>
        )
}


Index.getInitialProps = async (ctx) => {
    const res = await fetch('https://reqres.in/api/users')
    const resJson = await res.json();
    return {users: resJson.data}

}

export default Index;
