import React from 'react'
import StyledFooter from "./StyledFooter.styles"

const Footer = () => {
  return (
    <StyledFooter>
        <div className='d-flex align-items-center justify-content-between p-3'>
            <div>
                <p className='navy-color'>&copy; <span className='orange-color'> ayockson </span>All Right Reserved</p>
            </div>
            <div>
                <p className='navy-color'>Designed By <span className='orange-color'>Ayockson_Creative Designs</span></p>
                <p className='navy-color'>Distributed By: <span className='orange-color'>ThemeWagon</span></p>
            </div>
        </div>
    </StyledFooter>
  )
}

export default Footer