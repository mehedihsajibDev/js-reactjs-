import React from 'react'
import { Btnsection, Card, CardSection, Typography } from '../../styles/Common.Styled'

export default function Thirdpage({setpage}) {
  return (
           <>
              <Typography>
                  <h2>This is your Third Page//</h2>
                  <h2>Which Programming Chanel do you love</h2>
              </Typography>
        
              <CardSection>
                    <Card>
                      <h2>Stack Learner</h2>
                    </Card>
                    <Card>
                      <h2>Code Abc</h2>
                    </Card>
              
                    <Card>
                      <h2>Learn with sumit</h2>
                    </Card>
              </CardSection>
              <Btnsection>
              <button className='prev' onClick={()=>setpage(prevPage=>prevPage-1)}>Previous</button>
              <button className='next' onClick={()=>setpage(4)}>Next</button>
              </Btnsection>
           </>
  )
}
