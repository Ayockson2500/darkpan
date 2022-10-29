import React from 'react'
import Layout from '../../layout'
import StyledWidget from "./StyledWidget.styles"
import Messages from "../../pages/home/dashboardContent/messages/Messages" 
import Calender from "../../pages/home/dashboardContent/calender/Calender"
import TodoList from "../../pages/home/dashboardContent/todolist/TodoList"
import Testimonial from './testimonial/Testimonial'
import Map from './map/Map'

const Widgets = () => {
  return (
    <StyledWidget>
        <Layout>
        <div className="widget-messageCalender-wrapper">
            <Messages />
            <Calender />
            <TodoList />
          </div>
          <div className='widget-testimonial-wrapper'>
              <Testimonial />
              <Map />
          </div>
        </Layout>
    </StyledWidget>
  )
}

export default Widgets