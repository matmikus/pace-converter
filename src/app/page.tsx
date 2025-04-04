'use client';

import Logo from '@/components/logo';
import Converter from '@/components/converter';
import Coffee from '@/components/coffee';
import Ad from '@/components/ad';
import Ad2 from '@/components/ad2';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import moduleStyles from './page.module.scss';
import { LangContext } from '@/context/lang-context';

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
    
    const lang = navigator?.language?.startsWith('pl') ? 'pl' : 'en';
    
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Ad />
                </Col>
                <Col className={moduleStyles.content} md={3}>
                    <LangContext.Provider value={lang}>
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
                    </LangContext.Provider>
                </Col>
                <Col>
                    <Ad2 />
                </Col>
            </Row>
        </Container>
    );
}
