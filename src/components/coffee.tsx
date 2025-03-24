export default function Coffee () {
    return (
        <div style={{ width: '100%', 'max-width': '400px', 'font-family': 'Arial, sans-serif' }}>
            <div style={{
                'box-sizing': 'border-box',
                'background-color': '#FFFFFF',
                padding: '11px',
                'border-radius': '16px',
                'box-shadow': '0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
                width: '100%',
                color: '#000000DE',
                'text-align': 'center'
            }}>
                <h3 style={{ 'font-size': '13px', 'font-weight': '600', 'line-height': '1.5', margin: '0' }}> Postaw
                    kawę za: </h3></div>
            <div style={{ display: 'flex', gap: '8px', 'margin-top': '12px', 'justify-content': 'center' }}>
                <a href="https://buycoffee.to/matmikus?coffeeSize=small"
                   style={{
                       display: 'flex',
                       'flex-direction': 'column',
                       'justify-content': 'center',
                       'align-items': 'center',
                       padding: '11px',
                       'border-radius': '16px',
                       'box-shadow': '0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
                       width: '100%',
                       'text-align': 'center',
                       'background-color': '#FFFFFF',
                       color: '#000000DE',
                       'text-decoration': 'none'
                   }}
                   target="_blank"
                   title="Postaw kawę za: 5 zł"> < img
                    src="https://buycoffee.to/img/coffee-small-white.svg"
                    alt="small coffee icon"
                    style={{ width: '28px', height: '28px' }} />
                    <span style={{
                        'font-size': '13px',
                        'font-weight': '700',
                        'margin-top': '8px',
                        'line-height': '1.5'
                    }}> 5&nbsp;zł </span>
                </a>
                <a href="https://buycoffee.to/matmikus?coffeeSize=medium"
                   style={{
                       display: 'flex',
                       'flex-direction': 'column',
                       'justify-content': 'center',
                       'align-items': 'center',
                       'padding': '11px',
                       'border-radius': '16px',
                       'box-shadow': '0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
                       width: '100%',
                       'text-align': 'center',
                       'background-color': '#FFFFFF',
                       color: '#000000DE',
                       'text-decoration': 'none'
                   }}
                   target="_blank"
                   title="Postaw kawę za: 10 zł"> < img
                    src="https://buycoffee.to/img/coffee-medium-white.svg"
                    alt="medium coffee icon"
                    style={{ width: '28px', height: '28px' }} />
                    <span style={{
                        'font-size': '13px',
                        'font-weight': '700',
                        'margin-top': '8px',
                        'line-height': '1.5'
                    }}> 10&nbsp;zł </span></a>
                <a href="https://buycoffee.to/matmikus?coffeeSize=large"
                   style={{
                       display: 'flex',
                       'flex-direction': 'column',
                       'justify-content': 'center',
                       'align-items': 'center',
                       'padding': '11px',
                       'border-radius': '16px',
                       'box-shadow': '0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
                       'width': '100%',
                       'text-align': 'center',
                       'background-color': '#FFFFFF',
                       'color': '#000000DE',
                       'text-decoration': 'none'
                   }}
                   target="_blank"
                   title="Postaw kawę za: 15 zł"> < img
                    src="https://buycoffee.to/img/coffee-large-white.svg"
                    alt="large coffee icon"
                    style={{ width: '28px', height: '28px' }} />
                    <span style={{
                        'font-size': '13px',
                        'font-weight': '700',
                        'margin-top': '8px',
                        'line-height': '1.5'
                    }}> 15&nbsp;zł </span>
                </a></div>
        </div>
    )
        ;
}
;
