import React, {ChangeEvent, ChangeEventHandler, useCallback, useEffect, useRef, useState} from 'react';
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition';
import style from './Speech.module.scss'
import {Link} from "react-router-dom";

const Speech = () => {
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    const [ourText, setOurText] = useState<string>('')

    const addRandomDigitAfterEachWord = useCallback((inputString: string): string => {
        let words = inputString.split("-");
        if (words.length === 1 ){
            words = words.join(' ').split(' ')
        }
        const resultArray: string[] = [];
        for (const word of words) {
            const randomDigit = Math.floor(Math.random() * 10);
            resultArray.push(word + randomDigit);
        }
        return resultArray.join(' ');
    }, [])

    const onClear = () => {
        setOurText('')
        resetTranscript()
    }

const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setOurText(event.target.value)
}

    useEffect(() => {
        if (transcript) {
            const modifiedText = addRandomDigitAfterEachWord(transcript);
            setOurText(modifiedText);
        }
    }, [transcript])

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
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
                <button className={style.SpeechButton} onClick={()=>SpeechRecognition.startListening()}>Start</button>
                <button className={style.SpeechButton} onClick={SpeechRecognition.stopListening}>Stop</button>
                <button className={style.SpeechButton} onClick={onClear}>Reset</button>
            </div>
            <Link className='Link' to={`/`}>Retur to Bonuses</Link>

        </div>
    );
};
export default Speech;