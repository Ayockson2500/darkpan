import React from 'react'
import StyledForms from "./StyledForms.styles"
import Layout from '../../layout'
import BasicForm from './basicForms/BasicForm'

const Forms = () => {
  return (
    <StyledForms>
        <Layout>
          <main className='form-wrapper'>
            <BasicForm />
            <BasicForm />
          </main>
        </Layout>
    </StyledForms>
  )
}

export default Forms