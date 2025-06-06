import React from 'react';
import Pcard from './Pcard';
import { CRow,CContainer,CCol } from '@coreui/react';
const details=[
  {
    source:require("../../Assets/Twitter-Audience-Insights.jpg"),
    link:'https://github.com/Ishrathshaik123/number-and-open-book-API',
    title:'TWITTER DASHBOARD ANALYSIS'
  },
  {
    source:require("../../Assets/job.png"),
      link:'https://github.com/Ishrathshaik123/JobPortalProject',
      title:'JOB PORTAL'
  },
]
const project = () => {
return (
  <CContainer>
    <h1 className="purple">Projects</h1><br></br>
    <CRow>
    <CCol lg='4' md='6' sm='12' >
    <Pcard  details={details[0]} />
    </CCol>
    <CCol lg='4' md='6' sm='12' >
    <Pcard  details={details[1]} />
    </CCol>
    </CRow>
  </CContainer>
)
}
export default project;



