import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function EmailVerify() {
    const [ validUrl, setValidUrl ] = useState(false);
    const params = useParams();

    useEffect(() => {
        const verifyEmail = async () => {
            try {
                const url = `https://gbestates.onrender.com/api/auth/confirm/${params.token}`;
                const { data } = await axios.get(url);
                console.log(data);
                setValidUrl(true);
            } catch (error) {
                console.log(error);
                setValidUrl(false);
            }
        };
        verifyEmail();
    }, [params])
  return (
    <Fragment>
        {
            validUrl ? (
                <div className=''>
                    <h1>Email verified successfuly</h1>
                    <Link to={'/sign-in'}>
                        <button className='outline-none p-12 bg-green-300 rounded-sm'>Login</button>
                    </Link>
                </div>
            ) : (
                <h1>404 Not Found</h1>
            )
        }
    </Fragment>
  )
}

export default EmailVerify