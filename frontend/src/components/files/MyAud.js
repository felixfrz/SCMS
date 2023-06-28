import React from 'react';
import { useParams } from 'react-router-dom';


const MyAudioPlayer = ({ filePath }) => {
    return (
        <audio controls className='audio-style'>
            <source src={filePath} type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
    );
};

const MyAud = () => {

    const { path } = useParams();

    return (
        <div className='body-style'>
            <div className='container py-5 text-center'>
                <MyAudioPlayer filePath={`/uploads/${path}`} />
            </div>
        </div>
    );
};

export default MyAud;