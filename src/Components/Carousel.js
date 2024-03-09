import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import React from 'react'
import AnnouncementImg from '../Assets/announcements.png'
import GradesImg from '../Assets/grades.png'
import AssignmentsImg from '../Assets/assignments.png'
import ClasslistImg from '../Assets/classlist.png'
import QuizzesImg from '../Assets/quizzes.png'
import FaqsImg from '../Assets/faqs.png'
import CalendarImg from '../Assets/calendar.png'

function ImageCarousel() {
  return (
    <div style={{backgroundColor:'black', height:'100%', width:'100%', marginBottom:'1em'}}>
        <Carousel>
            <Paper>
                <img src={AnnouncementImg} style={{width:'100%'}}/>
            </Paper>
            <Paper>
                <img src={AssignmentsImg} style={{width:'100%'}}/>
            </Paper>
            <Paper>
                <img src={ClasslistImg} style={{width:'100%'}}/>
            </Paper>
            <Paper>
                <img src={QuizzesImg} style={{width:'100%'}}/>
            </Paper>
            <Paper>
                <img src={GradesImg} style={{width:'100%'}}/>
            </Paper>
            <Paper>
                <img src={FaqsImg} style={{width:'100%'}}/>
            </Paper>
            <Paper>
                <img src={CalendarImg} style={{width:'100%'}}/>
            </Paper>
        </Carousel>
    </div>
  )
}

export default ImageCarousel
