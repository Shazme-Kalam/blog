import React from 'react';
import { Link} from 'react-router-dom';
import { Button, Card, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const BlogDetail = ({ blogs }) => {
  let { id } = useParams(); 

  return (
    <div style={{backgroundImage: "linear-gradient(to right, #F1D4E9, #F1DBF7, #F8DBF7 )"}}>
         <Row xs={1} md={3} className="g-4">
      {blogs && blogs.map((item) => ( 
        <Card key={id} style={{ width: '16rem', margin: "30px" }} className='navbar'> 
          <Card.Body className='gradient-paragraph'>
            <Card.Title>Author</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{item.author}</Card.Subtitle>
            <Card.Title>Quote</Card.Title>
            <Card.Text>"{item.text.slice(0, 15)}...</Card.Text>


            <Button variant="secondary">
              <Link to={`/blogs`} className="text-dark text-decoration-none fw-bold">Read Blog...</Link>
            </Button>
          </Card.Body>
        </Card>
      ))}
      </Row>
    </div>
  );
};

export default BlogDetail;
