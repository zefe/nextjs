import {useRouter} from 'next/router';
import fetch from 'isomorphic-fetch';
import Layout from '../../components/layout';


const User = ({user}) => {
    const router = useRouter();
    const {id} = router.query;

    return (
            <Layout>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card">
                            <div className="card-header text-center">
                                <img src={user.avatar} alt="avatar" style={{borderRadius: '50%'}} />
                            </div>
                            <div className="card-body text-center">
                            <h3>{user.first_name}{user.last_name}</h3>
                                <p>{user.email}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </Layout>
        )
}

User.getInitialProps = async (ctx) => {

    const res = await fetch(`https://reqres.in/api/users/${ctx.query.id}`);
    const resJson = await res.json();

    return {user: resJson.data}
}

export default User;