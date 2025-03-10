import Logo from '@/components/logo';
import Converter from '@/components/converter';
import Coffee from '@/components/coffee';
import Ad from '@/components/ad';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home () {
    const styles = {
        logo: {
            margin: '24px'
        },
        converter: {
            margin: '24px'
        },
        footer: {
            margin: '24px'
        }
    };
    
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Ad />
                </Col>
                <Col className={'d-flex flex-column min-vh-100 justify-content-center align-items-center'}>
                    <main>
                        <div style={styles.logo}>
                            <Logo />
                        </div>
                        <div style={styles.converter}>
                            <Converter />
                        </div>
                    </main>
                    <footer style={styles.footer}>
                        <Coffee />
                    </footer>
                </Col>
                <Col>
                    <Ad />
                </Col>
            </Row>
        </Container>
    );
}
