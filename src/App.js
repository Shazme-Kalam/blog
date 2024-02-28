import { Col, Container, Row } from 'react-bootstrap';
import Header from './Header';
import { useEffect, useState } from 'react';
// import BlogList from './BlogList';
import BlogDetail from './BlogDetail';

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://type.fit/api/quotes") // Replace with your API endpoint
      .then(response => response.json())
      .then(data => {
        setBlogs(data);
        console.log(data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Container  style={{backgroundImage: "linear-gradient(to right, #F1D4E9, #F1DBF7, #F8DBF7 )"}}>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col>
          {/* <BlogList blogs={blogs} /> */}
          <BlogDetail blogs={blogs} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
