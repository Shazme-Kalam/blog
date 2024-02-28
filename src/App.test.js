// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
import { Col, Container, Row } from 'react-bootstrap';
import Header from './Header';
import { useEffect, useState } from 'react';
import BlogList from './BlogList';
// import BlogDetail from './BlogDetail';

function AppTest() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://type.fit/api/quotes") 
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
    <Container>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col>
          <BlogList blogs={blogs} />
          {/* <BlogDetail blogs={blogs} /> */}
        </Col>
      </Row>
    </Container>
  );
}

export default AppTest;
