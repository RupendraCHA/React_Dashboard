import React from 'react'
import "./widget.scss"

import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';


const Widget = ({type}) => {

    let data;

    let amount = 10000;
    let diff = 20;

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                value: 1980,
                link: "See all users",
                icons: <PersonOutlinedIcon className='icon' style={{color: "crimson", backgroundColor: "#dea6a6"}}/>
            }
            break
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                value: 185,
                link: "View all orders",
                icons: <ShoppingCartOutlinedIcon className='icon' style={{color: "#ded309", backgroundColor: "#edebca"}}/>
            }
            break
        case "earning":
            data = {
                title: "EARNINGS",
                isMoney: true,
                value: 1220980,
                link: "View net Earnings",
                icons: <CurrencyRupeeOutlinedIcon className='icon' style={{color: "#10e309", backgroundColor: "#b9e3b8"}}/>
            }
            break
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                value: 104895,
                link: "See Details",
                icons: <AccountBalanceWalletOutlinedIcon className='icon' style={{color: "#0b43db", backgroundColor: "#b1bee0"}}/>
            }
            break
        default:
            break
    }
  return (
    <div className='widget'>
        <div className='left'>
            <span className='title'>{data.title}</span>
            <span className='counter'>{data.isMoney && "₹"} {data.value}</span>
            <span className='link'>{data.link}</span>
        </div>
        <div className='right'>
            <div className='percentage positive'>
                <KeyboardArrowUpOutlinedIcon/>
                {diff} %
            </div>
            {data.icons}
        </div>
    </div>
  )
}

export default Widget