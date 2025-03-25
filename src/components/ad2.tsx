import Container from 'react-bootstrap/Container';

export default function Ad2 () {
    return (
        <Container>
            <Container fluid className="d-none d-md-flex min-vh-100 justify-content-center align-items-center">
            </Container>
            <Container fluid className="d-flex d-md-none justify-content-center align-items-center">
            </Container>
        </Container>
    );
};
