import React from 'react'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'

const UserItems: React.FC = () => {
  return (
    <div>
      <Box sx={{
                display: 'flex',
            }}>
                <Link to='/profile'>
                    <Box sx={{position: 'relative', marginRight: 5}}>
                        <img src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/7/10/1436545330723/373bb9df-7947-49e9-adad-020c378b6dce-1360x2040.jpeg?width=445&dpr=1&s=none" alt="userImage" />
                        <Box sx={{
                            backgroundColor: 'green', 
                            width: 4, 
                            height: 4, 
                            position: 'absolute', 
                            bottom: 2, 
                            left: 2
                        }} 
                        />
                        <span>User Username</span>
                    </Box>
                </Link>              
            </Box>
    </div>
  )
}

export default UserItems
