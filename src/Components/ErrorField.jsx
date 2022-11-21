import { Form, Alert } from "react-bootstrap";

const styles = {
    alert:{
      marginTop: "8px"
    }
  }

function ErrorField({children}){
    return(
        <Form.Text>
            <Alert variant="danger" style={styles.alert}>
                {children}
            </Alert>
        </Form.Text>
    )        
}

export default ErrorField