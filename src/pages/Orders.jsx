import React, { useEffect, useState } from 'react'

const Orders = () => {
  const [ orders, setOrders ] = useState(false);
  const [ loading, setLoading ] = useState(true);
  // const [ status, setStatus ] = useState('');
  const [ isApproved, setIsApproved ] =useState(true);


  const handleApprove = async (id) => {
      const status = 'Approved';
      try {
        const res = await fetch(`https://gbestates.onrender.com/api/listing/updateOrder/${id}`, {
          method : 'POST',
          headers : {
            'Content-Type' : 'application/json',
          },
          body: JSON.stringify({ status })
        });
        setIsApproved('Your order is approved');
        const result = await fetch('https://gbestates.onrender.com/api/listing/getAllOrders');
      const data = await result.json();
      if (data === false) {
        setLoading(false);
        return;
      }
      setOrders(data);
      } catch (error) {
        console.log(error.message)
        setIsApproved('Your order has been declined');
      }  
  }
  const handleReject = async (id) => {
    const status = 'Declined';
    try {
      const res = await fetch(`https://gbestates.onrender.com/api/listing/updateOrder/${id}`, {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify({ status })
      });
      setIsApproved('Your order is declined');
      const result = await fetch('https://gbestates.onrender.com/api/listing/getAllOrders');
      const data = await result.json();
      if (data === false) {
        setLoading(false);
        return;
      }
      setOrders(data);
    } catch (error) {
      // next(error);
      setIsApproved('Your order has been declined');
    }  
}

useEffect(() => {
  const getOrders = async () => {
    try {
      setLoading(true);
      const result = await fetch('https://gbestates.onrender.com/api/listing/getAllOrders');
      const data = await result.json();
      if (data === false) {
        setLoading(false);
        return;
      }
      setOrders(data);
    } catch (error) {
      setLoading(true)
    }
  };
  getOrders();
}, []);

  return (
    <div>
       <div className='container mt-1'>
        <h2 className='font-semibold'>Orders from the customer</h2>
        { loading }
          <table className='table'>
            <thead>
              <tr>
                <th>Customers name</th>
                <th>Customer Email</th>
                <th>Phone number</th>
                <th>House Needed</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className='items-center'>
              { orders && orders.map((cust, index) => (
                <tr key={index}>
                  <td>{cust.name}</td>
                  <td>{cust.email}</td>
                  <td>{cust.phone}</td>
                  <td>{cust.house}</td>
                  <td className='flex gap-2 justify-center mb-2'>
                    { cust.status === 'Pending' && (<> <button className='p-2 text-decoration-none bg-green-800 text-redBeige rounded-sm'  onClick={() => handleApprove(`${cust._id}`)}>Approve</button><button className='p-2 text-decoration-none bg-yellow-400 text-redBeige rounded-sm' onClick={() => handleReject(`${cust._id}`)}>Decline</button></>) }                    
                   { cust.status === 'Approved' && (<p className="p-2 text-decoration-none bg-green-800 text-redBeige rounded-sm">Order approved</p>) }
                   { cust.status === 'Declined' && (<p className='p-2 text-decoration-none bg-yellow-400 text-redBeige rounded-sm'> Order declined</p>) }
                    
                  </td>
                </tr>
              ))}
              <tr>
                <td></td>
              </tr>
            </tbody>
            
          </table>
       </div>
    </div>
  )
}

export default Orders
