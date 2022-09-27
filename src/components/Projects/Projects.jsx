import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image from "./balazs-ketyi-_x335IZXxfc-unsplash.jpg"

function Projects() {
  return (
    <div className="col-sm-12" style={{backgroundColor:"#EAF6F6"}}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} style={{height:"100px", width:"100px"}}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Projects;