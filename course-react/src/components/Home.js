import React , {useEffect} from 'react';
import '../App.css';
import { Container,Button } from 'reactstrap';

function Home() {

    useEffect(()=>{
        document.title="Home Page || Maddy Website";
      }, []);

    return(
        <div className='jumbotron text-center' >  
        <h1>Courses</h1>
        <h4>Hello welcome to my course App</h4>
        <Container>
            <Button color='success' outline>
                Click Here
            </Button>
        </Container>
        </div>
    );
}

export default Home;