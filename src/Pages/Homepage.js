import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import Image from 'react-bootstrap/Image'
import './Homepage.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Homepage() {
  const [startDate,setStartDate]=useState('2017-07-08')
  const [endDate,setEndDtae]=useState('2017-07-10')
 const [apidata2,setApidata2]=useState([])
 
  const [apiData,setApidata]=useState({})
  const api_key="n25dVxM5lnV3K4rJe6Zk7dvSzNuchf4W0mBvcrra"
  useEffect(()=>{
     axios.get(`https://api.nasa.gov/planetary/apod?api_key=${api_key}`).then(res=>setApidata(res.data))
  },[])
  useEffect(()=>{
    try{

      axios.get(`https://api.nasa.gov/planetary/apod?api_key=${api_key}&start_date=${startDate}&end_date=${endDate}`).then(res=>{setApidata2(res.data)})
    }catch(err){
      console.log(err)
    }

  },[startDate,endDate])
  console.log(apidata2)
  return (
    <>
    <Container >
    <div className="imgDiv">
   <Image src={apiData.url} alt='k' thumbnail/>
   <div className="imgInfo">
    <h1>{apiData.title}</h1>
    <span>{apiData.date}</span>
    <h5>by {apiData.copyright}</h5>
    <p>{apiData.explanation
}</p>
   </div>
      </div>

     <div className='featureCard'>
      <div className="inputDate">
       <span>Start Date <input type='date'value={startDate} onChange={(e)=>setStartDate(e.target.value)}/></span>
       <span>End Date <input type='date' value={endDate}onChange={(e)=>setEndDtae(e.target.value)}/></span>
       
      </div>
      <div className="cards">
       {apidata2.map((e)=>{
        return   <Card style={{ width: '18rem' ,margin:'10px' }} key={e.date}>
        <Card.Img variant="top" src={e.url} />
        <Card.Body>
          <Card.Title>{e.title}</Card.Title>
          <Card.Text>
           by {e.copyright} <span>{e.date}</span>
          </Card.Text>
          <Button variant="primary">View More</Button>
        </Card.Body>
      </Card>
       })}
      </div>
      </div> 
      
    </Container>

    </>
  )
}
