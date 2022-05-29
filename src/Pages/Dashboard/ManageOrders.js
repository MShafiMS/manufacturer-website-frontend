import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const ManageOrders = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [products, setProduct] = useState([]);
    const [loading, setloading] = useState(true);
    useEffect(() => {
        if (user) {
            fetch(`https://aqueous-cove-16160.herokuapp.com/order`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })


                .then(res => {
                    console.log('res', res);
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
                            item.paid && <button className='btn btn-dark fw-bold'>Pending</button>
                        }
                        {
                            !item.paid && <button className='btn btn-dark fw-bold'>Unpaid</button>
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

export default ManageOrders;




