import { Row, Col } from "react-bootstrap"

function Title({children}){
    return(
        <Row className="mb-4">
            <Col>
                <h3>{children}</h3>
            </Col>    
        </Row>
    )
}
export default Title