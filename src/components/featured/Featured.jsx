import React from 'react'
import "./featured.scss"

import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import {CircularProgressbar} from "react-circular-progressbar"
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

import "react-circular-progressbar/dist/styles.css"

const Featured = () => {
  return (
    <div className='featured'>
        <div className='top'>
            <h1 className='title'>Total Revenue</h1>
            <MoreVertOutlinedIcon/>
        </div>
        <div className='bottom'>
            <div className='featuredChart'>
                <CircularProgressbar value={80} text='80%' strokeWidth={4}/>
            </div>
            <p className='title'>Total sales made today</p>
            <p className='amount'>₹ 420k</p>
            <p className='des'>Previous transactions processing. Last payments may not be included.</p>
            <div className='summary'>
                <div className='item'>
                    <div className='itemTitle'>Target</div>
                    <div className='itemResult positive'>
                        <KeyboardArrowUpOutlinedIcon/>
                        <div className='resultAmount'>₹ 1200k</div>
                    </div>
                </div>
                <div className='item'>
                    <div className='itemTitle'>Last Week</div>
                    <div className='itemResult negative'>
                        <KeyboardArrowDownOutlinedIcon/>
                        <div className='resultAmount'>₹ 350k</div>
                    </div>
                </div>
                <div className='item'>
                    <div className='itemTitle'>Last Month</div>
                    <div className='itemResult positive'>
                        <KeyboardArrowUpOutlinedIcon/>
                        <div className='resultAmount'>₹ 870k</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured