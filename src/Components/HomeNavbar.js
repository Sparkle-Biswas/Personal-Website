import React from 'react'
import { Tooltip } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import { useNavigate } from 'react-router-dom'
import PersonPinIcon from '@mui/icons-material/PersonPin'
import WidgetsIcon from '@mui/icons-material/Widgets'

function HomeNavbar() {
    const navigate = useNavigate();
    return (
        <div style={{ backgroundColor:'black', display:'flex', position:'sticky',width:'100%', top:'0',
            marginBottom:"5em",  borderBottom:'2px solid rgb(25, 79, 228)', zIndex:'9000', gap:'4em', padding:'0.2em'}}>
            <Tooltip title='Home' placement='bottom'>
                <HomeIcon sx={{fontSize:'1.7em', color: 'rgb(90, 126, 225)', margin: 0.5,
                '&:hover': {
                cursor: 'pointer'}
                }}
                onClick={() => {
                    navigate("/");}}
                />
            </Tooltip>
            <Tooltip title='Projects' placement='bottom'>
                <WidgetsIcon sx={{fontSize:'1.7em', color: 'rgb(90, 126, 225)', margin: 0.5,
                '&:hover': {
                cursor: 'pointer'}
                }}
                onClick={() => {
                    navigate("/projects");}}
                />
            </Tooltip>
            <Tooltip title='About' placement='bottom'>
                <PersonPinIcon sx={{fontSize:'1.7em', color: 'rgb(90, 126, 225)', margin: 0.5,
                '&:hover': {
                cursor: 'pointer'}
                }}
                onClick={() => {
                    navigate("/about");}}
                />
            </Tooltip>
        </div>
    )
}

export default HomeNavbar
