import Image from 'next/image';
import './logo.css';

export default function Logo () {
    return (
        <div className={'d-flex flex-column align-items-center'}>
            <Image
                className={'logo'}
                src="/logo.svg"
                alt="logo"
                width={200}
                height={200}
                priority
            />
            <h1>
                <div className={'first-row'}>PACE</div>
                <br />
                <div className={'second-row'}>CONVERTER</div>
            </h1>
        </div>
    );
};
