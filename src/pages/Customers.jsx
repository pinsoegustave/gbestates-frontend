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
    },{
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
  const data = [
    {
      id: 1,
      name: 'yousuff ndour',
      email: 'youssof@gmail.com',
      phone: 789893432
    },
    {
      id: 2,
      name: 'Khalil ndour',
      email: 'hkal@gmail.com',
      phone: 789893432
    },
    {
      id: 3,
      name: 'arifg ndour',
      email: 'ariff@gmail.com',
      phone: 789893432
    },
    {
      id: 4,
      name: 'musaee keyz ',
      email: 'keymusaa@gmail.com',
      phone: 789893432
    },
    {
      id: 5,
      name: 'Jamal micro',
      email: 'jamal@yahoo.cdi',
      phone: 789893432
    },
    {
      id: 6,
      name: 'Harden James',
      email: 'harden@gmail.com',
      phone: 789893432
    },
    {
      id: 7,
      name: ' Kilikouu',
      email: 'kili@gmail.com',
      phone: 789893432
    },
    {
      id: 8,
      name: 'samuel eto',
      email: 'eto@gmail.com',
      phone: 789893432
    },
    {
      id: 9,
      name: 'Justboys ',
      email: 'boys@gmail.com',
      phone: 789893432
    },
    {
      id: 10,
      name: 'microjeni',
      email: 'jenis@yahoo.cdi',
      phone: 789893432
    },
    {
      id: 11,
      name: 'Klibert',
      email: 'klib@gmail.com',
      phone: 789893432
    },
    {
      id: 12,
      name: 'Kafunyooo',
      email: 'funyoo@gmail.com',
      phone: 789893432
    },
    {
      id: 13,
      name: 'Deenge dengee',
      email: 'denge@gmail.com',
      phone: 789893432
    },
    {
      id: 14,
      name: 'mohammed kudus ',
      email: 'kudus@gmail.com',
      phone: 789893432
    },
    {
      id: 15,
      name: 'Antony',
      email: 'antony@yahoo.cdi',
      phone: 789893432
    }
  ]
  
  useEffect(() => {
    const getCustomers = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://gbestates.onrender.com/api/listing/getAllHouses');
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
        <DataTable
        columns={columns}
        data={data}
        selectableRows
        fixedHeader
        pagination
        >
        </DataTable>
    </div>
  )
} 

export default Customers