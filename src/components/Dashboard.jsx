import React from 'react'
import Dashboardstats from './shared/Dashboardstats'
import TransactionChart from './shared/TransactionChart'
export default function Dashboard() {
  return (
    <>
    <div className='flex gap-4'>
        <Dashboardstats/>
    </div>
    <div className='mt-4' >
        <TransactionChart />
    </div>
    </>
  )
}
