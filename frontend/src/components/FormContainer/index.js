import { Container, Row,Col } from 'react-bootstrap'

export default function FormContainer({children}){
    return(
        <Container className="py-5">
            <Row
            className="justify-content-md-center"
            style={{width:"100%", margin: "0"}}
            >
                <Col xs={12}>{children}</Col>
            </Row>
        </Container>
    )
}