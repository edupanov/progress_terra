import React, {ChangeEvent, ChangeEventHandler, useCallback, useEffect, useRef, useState} from 'react';
import style from './SpeechNative.module.scss'
import {Link} from "react-router-dom";

const SpeechNative = () => {

    const [ourText, setOurText] = useState<string>('')
    const [listening, setListening] = useState<boolean>(false)


    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'ru-RU'
    recognition.interimResults = false
    recognition.continuous = false
    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript
        const changedTranscript = addRandomDigitAfterEachWord(transcript)
        setOurText((prevState)=> `${prevState} ${changedTranscript}`)
    };

    recognition.onstart = function() {
        setListening(true)
    };
    recognition.onend = function() {
        setListening(false)
    };

    const addRandomDigitAfterEachWord = useCallback((inputString: string): string => {
        let words = inputString.split("-");
        if (words.length === 1 ){
            words = words.join('').split(' ')
        }
        const resultArray: string[] = [];
        for (const word of words) {
            const randomDigit = Math.floor(Math.random() * 10);
            resultArray.push(word + randomDigit);
        }
        return resultArray.join(' ');
    }, [])

    const startRecognition = () => {
        recognition.start()
    }

    const stopRecognition = () => {
        recognition.stop()
    }

    const onClear = () => {
        setOurText('')
    }

    const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setOurText(event.target.value)
    }


    return (
        <div className={style.SpeechWrapper}>
            <div className={style.SpeechTitleWrapper}>
                <h1>Microphone: </h1>
                <span className={listening ? style.MicroOn : style.MicroOff}>
                    {listening ? 'on' : 'off'}
                </span>
            </div>
            <textarea
                className={style.SpeechTextView}
                rows={10}
                cols={50}
                value={ourText}
                onChange={onChange}
            />
            <div className={style.SpeechButtonWrapper}>
                <button className={style.SpeechButton} onClick={startRecognition}>Start</button>
                <button className={style.SpeechButton} onClick={stopRecognition}>Stop</button>
                <button className={style.SpeechButton} onClick={onClear}>Reset</button>
            </div>
            <Link className='Link' to={`/`}>Return to Bonuses</Link>

        </div>
    );
};
export default SpeechNative;