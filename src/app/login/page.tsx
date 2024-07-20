import Formwrap from "../components/Formwrap";
import Container from "../Container";
import LoginForm from "./loginForm";

const Login = () => {
    return ( 
        <Container>
            <Formwrap>
                <LoginForm/>
            </Formwrap>
        </Container>
     );
}
 
export default Login;