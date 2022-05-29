import { React, useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Spinner } from 'react-bootstrap';
import { signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
const Myorders = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [products, setProduct] = useState([]);
    const [loading, setloading] = useState(true);
    const email = user?.email;
    const photo = user?.photoURL;
    const name = user?.displayName;

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/myorder?email=${email}`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })


                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/login')
                    }
                    return res.json();
                })


                .then(data => {
                    setProduct(data);
                    setloading(false);
                })
        }
    }, [products]);

    const deleteItems = id => {

        const proceed = window.confirm("Are you sure to delete this order?");
        if (proceed) {
            fetch(`http://localhost:5000/order/${id}`, {
                method: 'DELETE',
            }, [products])
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    const remaining = products.filter(item => item._id !== id);
                    setProduct(remaining);

                })
        }

    }
    return (
        
        <div class="mx-40 w-full">
          <table className="table w-full">
            
          {loading ? <div className='d-flex justify-content-center align-items-center mt-5'>
                < Spinner animation="grow" variant="light" />         </div > : <div className='mx-auto mt-5 mb-5'>
                <thead className='mx-auto'>
      <tr>
        <th >User</th>
        <th>Product Name / Price</th>
        <th>Quantity</th>
        <th>Action</th>
      </tr>
    </thead>
                {
                    products?.map(item => <div className=' row text-white fw-bold'>
                        <tbody>
      <tr>
        <td>
          <div className="flex items-center space-x-3">
          <div class="avatar">
            </div>
            <div>
              <div className="font-bold">{item.name}</div>
              <div className="text-sm opacity-50">{item.email}</div>
            </div>
          </div>
        </td>
        <td>
        {item.productName}
          
          <span className="badge badge-accent ml-4">${item.price}</span>
        </td>
        <td>{item.quantity}</td>
        <th>
        {
                            (item.price && !item.paid) && <>
                                <Link to={`/dashboard/payment/${item._id}`} className='btn mr-2 btn-primary btn-xs'>Pay</Link>
                                <button onClick={() => deleteItems(item._id)} className='btn btn-secondary btn-xs'>Delete</button>
                            </>
                        }
                            {
                                (item.price && item.paid) && <p>Transaction ID: {item?.transactionId}</p>
                            }
        </th>
      </tr>
    </tbody>

                    </div>)
                }
            </div>
            }
          </table>
        </div>




    );
};

export default Myorders;

