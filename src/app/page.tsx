import Logo from '@/components/logo';
import Converter from '@/components/converter';
import Coffee from '@/components/coffee';
import Ad from '@/components/ad';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import moduleStyles from './page.module.scss';

export default function Home () {
    const localStyles = {
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
                <Col className={moduleStyles.content} md={3}>
                    <main>
                        <div style={localStyles.logo}>
                            <Logo />
                        </div>
                        <div style={localStyles.converter}>
                            <Converter />
                        </div>
                    </main>
                    <footer style={localStyles.footer}>
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
