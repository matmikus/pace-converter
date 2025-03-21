import Container from 'react-bootstrap/Container';

export default function Ad () {
    return (
        <Container>
            <Container fluid className="d-none d-md-flex min-vh-100 justify-content-center align-items-center">
                ad vertical here
            </Container>
            <Container fluid className="d-flex d-md-none justify-content-center align-items-center">
                ad horizontal here
            </Container>
        </Container>
    );
};
