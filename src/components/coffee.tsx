import { useContext } from 'react';
import { LangContext } from '@/context/lang-context';

export default function Coffee () {
    const lang = useContext(LangContext);
    
    return (
        <div style={{ width: '100%', 'maxWidth': '400px', 'fontFamily': 'Arial, sans-serif' }}>
            <div style={{
                'boxSizing': 'border-box',
                'backgroundColor': '#FFFFFF',
                padding: '11px',
                'borderRadius': '16px',
                'boxShadow': '0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
                width: '100%',
                color: '#000000DE',
                'textAlign': 'center'
            }}>
                <h3 style={{ 'fontSize': '13px', 'fontWeight': '600', 'lineHeight': '1.5', margin: '0' }}>
                    { lang === 'pl' ? 'Postaw kawę za: ' : 'Buy me a coffee' }
                </h3>
            </div>
            <div style={{ display: 'flex', gap: '8px', 'marginTop': '12px', 'justifyContent': 'center' }}>
                <a href="https://buycoffee.to/matmikus?coffeeSize=small"
                   style={{
                       display: 'flex',
                       'flexDirection': 'column',
                       'justifyContent': 'center',
                       'alignItems': 'center',
                       padding: '11px',
                       'borderRadius': '16px',
                       'boxShadow': '0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
                       width: '100%',
                       'textAlign': 'center',
                       'backgroundColor': '#FFFFFF',
                       color: '#000000DE',
                       'textDecoration': 'none'
                   }}
                   target="_blank"
                   title="Postaw kawę za: 5 zł"> < img
                    src="https://buycoffee.to/img/coffee-small-white.svg"
                    alt="small coffee icon"
                    style={{ width: '28px', height: '28px' }} />
                    <span style={{
                        'fontSize': '13px',
                        'fontWeight': '700',
                        'marginTop': '8px',
                        'lineHeight': '1.5'
                    }}> 5&nbsp;zł </span>
                </a>
                <a href="https://buycoffee.to/matmikus?coffeeSize=medium"
                   style={{
                       display: 'flex',
                       'flexDirection': 'column',
                       'justifyContent': 'center',
                       'alignItems': 'center',
                       'padding': '11px',
                       'borderRadius': '16px',
                       'boxShadow': '0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
                       width: '100%',
                       'textAlign': 'center',
                       'backgroundColor': '#FFFFFF',
                       color: '#000000DE',
                       'textDecoration': 'none'
                   }}
                   target="_blank"
                   title="Postaw kawę za: 10 zł"> < img
                    src="https://buycoffee.to/img/coffee-medium-white.svg"
                    alt="medium coffee icon"
                    style={{ width: '28px', height: '28px' }} />
                    <span style={{
                        'fontSize': '13px',
                        'fontWeight': '700',
                        'marginTop': '8px',
                        'lineHeight': '1.5'
                    }}> 10&nbsp;zł </span></a>
                <a href="https://buycoffee.to/matmikus?coffeeSize=large"
                   style={{
                       display: 'flex',
                       'flexDirection': 'column',
                       'justifyContent': 'center',
                       'alignItems': 'center',
                       'padding': '11px',
                       'borderRadius': '16px',
                       'boxShadow': '0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
                       'width': '100%',
                       'textAlign': 'center',
                       'backgroundColor': '#FFFFFF',
                       'color': '#000000DE',
                       'textDecoration': 'none'
                   }}
                   target="_blank"
                   title="Postaw kawę za: 15 zł"> < img
                    src="https://buycoffee.to/img/coffee-large-white.svg"
                    alt="large coffee icon"
                    style={{ width: '28px', height: '28px' }} />
                    <span style={{
                        'fontSize': '13px',
                        'fontWeight': '700',
                        'marginTop': '8px',
                        'lineHeight': '1.5'
                    }}> 15&nbsp;zł </span>
                </a></div>
        </div>
    )
        ;
}
;
