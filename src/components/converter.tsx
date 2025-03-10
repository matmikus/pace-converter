'use client';

import React, { useState } from 'react'

export default function Converter () {
    const [currentOption, setCurrentOptions] = useState(() => {
        return '5';
    });
    
    const changeOptions = (option) => {
        setCurrentOptions(option)
    };
    
    const options = [
        {
            value: '5',
            name: '5km',
            data: [
                ['3:20', '00:16:40'],
                ['3:21', '00:16:45'],
                ['3:22', '00:16:51']
            ]
        },
        {
            value: '10',
            name: '10km',
            data: [
                ['3:20', '00:33:20'],
                ['3:21', '00:33:31'],
                ['3:22', '00:33:42']
            ]
        },
        {
            value: '21',
            name: 'Half marathon',
            data: [
                ['3:20', '01:11:07'],
                ['3:21', '01:10:43'],
                ['3:22', '01:10:20']
            ]
        },
        {
            value: '42',
            name: 'Marathon',
            data: [
                ['3:20', '02:22:14'],
                ['3:21', '02:21:27'],
                ['3:22', '02:20:40']
            ]
        }
    ];
    
    return (
        <div>
            <select className={'w-100'} onChange={(event) => changeOptions(event.target.value)} value={currentOption}>
                {
                    options.map((option) =>
                        <option key={option.value} value={option.value}>{option.name}</option>)
                }
            </select>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Pace min/km</th>
                        <th scope="col">Time</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        options.find(el => el.value === currentOption).data.map((entity, indexKey) =>
                            <tr key={indexKey}>
                                <td>{entity[0]}</td>
                                <td>{entity[1]}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};
