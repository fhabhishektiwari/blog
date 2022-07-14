import '../App.css'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
const Page404 = () => {
    return (
        <>
            <Container>
                <h1 className='display-6'>Sorry, This Page doesn't Exist</h1>
                <Link to='/'>Go to Home page</Link>
            </Container>
        </>
     );
}
 
export default Page404;