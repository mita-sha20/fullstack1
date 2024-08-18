"use client"
import Image from 'next/image';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProCard = ({data}) => {
    console.log(data)
  return (
    
        data.map(item=>(
        <Card style={{ width: '20rem' }}>
     <Image
      src={`http://localhost:8000${item.image}`}
      width={300}
      height={300}
      alt="Picture of the author"
    />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      )
      )
  
  )
}

export default ProCard
