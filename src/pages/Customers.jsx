import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';

const Customers = () => {
  const [ customers, setCustomers ] = useState(false);
  const [ loading, setLoading ] = useState(true); 

  const columns = [
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true
    },
    {
      name: 'Email',
      selector: row => row.email,
      sortable: true
    },
    {
      name: 'Phone Number',
      selector: row => row.phone,
      sortable: true
    }
  ];
  // const data = [
  //   {
  //     id: 1,
  //     name: 'yousuff ndour',
  //     email: 'youssof@gmail.com',
  //     phone: 789893432
  //   },
  //   {
  //     id: 2,
  //     name: 'Khalil ndour',
  //     email: 'hkal@gmail.com',
  //     phone: 789893432
  //   },
  //   {
  //     id: 3,
  //     name: 'arifg ndour',
  //     email: 'ariff@gmail.com',
  //     phone: 789893432
  //   },
  //   {
  //     id: 4,
  //     name: 'musaee keyz ',
  //     email: 'keymusaa@gmail.com',
  //     phone: 789893432
  //   },
  //   {
  //     id: 5,
  //     name: 'Jamal micro',
  //     email: 'jamal@yahoo.cdi',
  //     phone: 789893432
  //   },
  //   {
  //     id: 6,
  //     name: 'Harden James',
  //     email: 'harden@gmail.com',
  //     phone: 789893432
  //   },
  //   {
  //     id: 7,
  //     name: ' Kilikouu',
  //     email: 'kili@gmail.com',
  //     phone: 789893432
  //   },
  //   {
  //     id: 8,
  //     name: 'samuel eto',
  //     email: 'eto@gmail.com',
  //     phone: 789893432
  //   },
  //   {
  //     id: 9,
  //     name: 'Justboys ',
  //     email: 'boys@gmail.com',
  //     phone: 789893432
  //   },
  //   {
  //     id: 10,
  //     name: 'microjeni',
  //     email: 'jenis@yahoo.cdi',
  //     phone: 789893432
  //   },
  //   {
  //     id: 11,
  //     name: 'Klibert',
  //     email: 'klib@gmail.com',
  //     phone: 789893432
  //   },
  //   {
  //     id: 12,
  //     name: 'Kafunyooo',
  //     email: 'funyoo@gmail.com',
  //     phone: 789893432
  //   },
  //   {
  //     id: 13,
  //     name: 'Deenge dengee',
  //     email: 'denge@gmail.com',
  //     phone: 789893432
  //   },
  //   {
  //     id: 14,
  //     name: 'mohammed kudus ',
  //     email: 'kudus@gmail.com',
  //     phone: 789893432
  //   },
  //   {
  //     id: 15,
  //     name: 'Antony',
  //     email: 'antony@yahoo.cdi',
  //     phone: 789893432
  //   }
  // ]
  
  useEffect(() => {
    const getCustomers = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://gbestates.onrender.com/api/user/getAllUsers');
        const data = await res.json();
        
        if (data === false) {
          setLoading(false);
          return;
        }
        setLoading(true);
        setCustomers(data);

      } catch (error) {
        console.log(error);
      }
    };
    getCustomers();
    
  }, []);
  // const [ records, setRecords ] = useState(data);

  
  // function handleFilter(event) {
    // const newData = data.filter(row => {
      // return row.name.toLowerCase().includes(event.target.value.toLowerCase());
    // });
    // setRecords(newData)
  // }
  return (
    <div className='container mt-5'>
        <h2 className='mb-5'>Our customers</h2>
        {/* <div className='text-end'><input type="text" placeholder='Search' className='p-2 border border-slate-500' onChange={handleFilter} /></div> */}
          <div className='bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-300 flex-1'>
            <table className='w-full  border-gray-400 rounded-sm'>
                <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Phone number</th>
                <th>Profile picture</th>
              </tr>
                </thead>
                <tbody>
         { customers && customers.map((customer, index) => (
                  <tr key={index}>
                    <td>{customer.username}</td>
                    <td>{customer.email}</td>
                    <td>0789787623</td>
                    <td><img src={customer.avatar} width={50} height={50} alt="" /></td>
                  </tr>
            ))}
            </tbody>
            </table>
          </div>
          
    </div>
  )
} 

export default Customers