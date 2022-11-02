import React from 'react'
import StyledForms from "./StyledForms.styles"
import Layout from '../../layout'
import BasicForm from './basicForms/BasicForm'
import HorizontalForm from './horizontalForms/HorizontalForm'
import FloatingLabel from './floatingLabel/FloatingLabel'
import FileInput from './filesForm/FileInput'

const Forms = () => {
  return (
    <StyledForms>
        <Layout>
          <main className='form-wrapper'>
            <BasicForm />
            <HorizontalForm />
          </main>
          <main className='form-wrapper'>
            <FloatingLabel />
            <FileInput />
          </main>
        </Layout>
    </StyledForms>
  )
}

export default Forms