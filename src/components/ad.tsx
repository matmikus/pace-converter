import Container from 'react-bootstrap/Container';

export default function Ad () {
    return (
        <Container>
            <Container fluid className="d-none d-md-flex min-vh-100 justify-content-center align-items-center">
                <ins className="adsbygoogle"
                     data-ad-client="ca-pub-8268924616638413"
                     data-ad-slot="2993683209"
                     data-ad-format="auto"
                     data-full-width-responsive="true"></ins>
            </Container>
            <Container fluid className="d-flex d-md-none justify-content-center align-items-center">
                <ins className="adsbygoogle"
                     data-ad-client="ca-pub-8268924616638413"
                     data-ad-slot="2993683209"
                     data-ad-format="auto"
                     data-full-width-responsive="true"></ins>
            </Container>
        </Container>
    );
};
