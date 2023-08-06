import React, {ChangeEvent, useState} from 'react';
import style from './SpeechNative.module.scss';
import {Link} from 'react-router-dom';
import useSpeechRecognition from "./hooks/useSpeechRecognition";
import Button from "../../../utills/components/Button";

const SpeechNative = () => {
    const {listening, transcript, startRecognition, stopRecognition, clearTranscript, setText} = useSpeechRecognition()

    const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value)
    }

    return (
        <div className={style.SpeechWrapper}>
            <div className={style.SpeechTitleWrapper}>
                <h1>Microphone: </h1>
                <span className={listening ? style.MicroOn : style.MicroOff}>{listening ? 'on' : 'off'}</span>
            </div>
            <textarea className={style.SpeechTextView} rows={10} cols={50} value={transcript} onChange={onChange} />
            <div className={style.SpeechButtonWrapper}>
                <Button onClick={startRecognition} disabled={listening}>
                    Start
                </Button>
                <Button onClick={stopRecognition} disabled={!listening}>
                    Stop
                </Button>
                <Button onClick={clearTranscript}>Reset</Button>
            </div>
            <Link className="Link" to={`/`}>
                Return to Bonuses
            </Link>
        </div>
    );
};

export default SpeechNative;
