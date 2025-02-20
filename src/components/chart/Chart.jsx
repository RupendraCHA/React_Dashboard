import React from 'react'
import "./chart.scss"

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = () => {

  const data = [
    {month: "January" , Total: 10000, Total1: 7000},
    {month: "February" , Total: 6000, Total1: 10000},
    {month: "March" , Total: 4908, Total1: 3200},
    {month: "April" , Total: 3820, Total1: 8000},
    {month: "May" , Total: 12000, Total1: 6000},
    {month: "June" , Total: 7345, Total1: 9000},
  ];
  return (
    <div className='chart'>
      <div className='title'>Last 6 Months (Revenue)</div>
      <ResponsiveContainer width="100%" aspect={2/1}>
      <AreaChart width={730} height={250} data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="month" stroke='gray'/>
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" className='chartGrid'/>
        <Tooltip />
        <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
        <Area type="monotone" dataKey="Total1" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
      </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart