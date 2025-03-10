import Image from 'next/image';

export default function Logo () {
    const styles = {
        logo: {
            filter: 'invert()'
        },
        firstRow: {
            fontSize: '60px',
            letterSpacing: '10px',
            lineHeight: '0',
            fontWeight: '800'
        },
        secondRow: {
            fontSize: '30px',
            marginTop: '-24px',
            fontWeight: '800'
        }
    };
    
    return (
        <div>
            <Image
                style={styles.logo}
                src="/logo.svg"
                alt="logo"
                width={200}
                height={200}
                priority
            />
            <h1>
                <div style={styles.firstRow}>PACE</div>
                <br />
                <div style={styles.secondRow}>CONVERTER</div>
            </h1>
        </div>
    );
};
