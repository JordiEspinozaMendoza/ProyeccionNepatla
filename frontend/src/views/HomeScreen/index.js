import Header from "../../components/Header";
import { Col, Row, Image } from "react-bootstrap";
import "./styles.css";
export default function HomeScreen() {
  return (
    <>
      <Header />
      <div className="text-center px-2 py-4" style={{ overflowX: "hidden" }}>
        <h2>Descubre especies en peligro y que medidas tomar</h2>
        <Row className="mt-5">
          <Col lg={6}>
            <Row>
              <Col md={6} className="text-left">
                <h5>Conoce</h5>
                <Image
                  src="https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80"
                  height="350px"
                  className="img"
                />
              </Col>
              <Col md={6} className="text-left">
                <h5>Apoya a salvar a las especies</h5>
                <Image
                  src="https://images.unsplash.com/photo-1611773941418-15f7e8d2c956?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGFuaW1hbHMlMjBpbiUyMHRoZSUyMHdpbGR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  height="350px"
                  className="img"
                />
              </Col>
            </Row>
          </Col>
          <Col lg={6}>
            <Image
              src="https://images.unsplash.com/photo-1589180961151-edb42fbd1276?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              height="500px"
              className="img"
            />
          </Col>
        </Row>
      
      </div>
      <div className="text-center py-5 px-5 bg-info">
        <h2>Title</h2>
      </div>
    </>
  );
}
