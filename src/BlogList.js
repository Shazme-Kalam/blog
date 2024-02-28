import { Card, Row } from "react-bootstrap";
import React from "react";

const BlogList = ({ blogs }) => {
  return ( 
    <>
    <div> <br />
       <Row  className="g-2">
      {blogs.map((item) => (
        <Card key={`/blogs/:id`} className="border-0">
        <Card.Header className="navbar text-capitalize">
          <h6>Author:</h6>
          <i>{item.author}</i>
        </Card.Header>
        <Card.Body className="gradient-paragraph">
          <Card.Text>
            <h6>Quote:</h6>
            <b>"{item.text}"</b>
          </Card.Text>
        </Card.Body>
      </Card> 
      ))}
    </Row>
    </div>
    </>
  )
}

export default BlogList;
