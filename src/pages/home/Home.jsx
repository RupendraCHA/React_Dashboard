import React from 'react'
import "./Home.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart'
import TableData from '../../components/table/Table'

const Home = () => {
  return (
    <div className='home'>
        <Sidebar/>
        <div className='homeContainer'>
          <Navbar/>
          <div className='widgets'>
            <Widget type="user"/>
            <Widget type="order"/>
            <Widget type="earning"/>
            <Widget type="balance"/>
          </div>
          <div className='charts'>
            <Featured/>
            <Chart/>
          </div>
          <div className='listContainer'>
            <div className='listTitle'>Latest Transactions</div>
            <TableData/>
          </div>
        </div>
    </div>
  )
}

export default Home