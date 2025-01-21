import React from 'react'
import {  Btnsection, Cardp, CardSectionp, Typography } from '../../styles/Common.Styled'

export default function Previewpage({setpage}) {
  return (
    <>
        <Typography>
          <h2>This is your Preview  Page//</h2>
          
        </Typography>

      <CardSectionp>
        <Cardp>
          <h2>Which Programming Language do you love?</h2>
          <span>Which Programming Language do you love?</span>
        </Cardp>
        <Cardp>
        <h2>You Experince</h2>
        <p>Answere:</p>
        </Cardp>
  
        <Cardp>
        <h2>Your Favourite youtube chanel</h2>
        <p>Answere:</p>
        </Cardp>
      </CardSectionp>
      <Btnsection>
          <button className='prev' onClick={()=>setpage(prevPage=>prevPage-1)}>Previous</button>
          <button className='next' onClick={()=>setpage(4)}>Next</button>
      </Btnsection>
    </>
  )
}
