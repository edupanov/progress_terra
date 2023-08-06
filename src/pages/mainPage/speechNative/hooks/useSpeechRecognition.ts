import { useState, useEffect, useCallback, useRef } from 'react';
import {addRandomDigitAfterEachWord} from "../../../../utills/utills";

const useSpeechRecognition = () => {
    const [listening, setListening] = useState<boolean>(false)
    const [transcript, setTranscript] = useState<string>('')

    const recognitionRef = useRef<SpeechRecognition | null>(null)

    useEffect(() => {
        recognitionRef.current = new (window.SpeechRecognition || window.webkitSpeechRecognition)()
        recognitionRef.current.lang = 'ru-RU'
        recognitionRef.current.interimResults = false
        recognitionRef.current.continuous = false

        recognitionRef.current.onresult = (event) => {
            const transcript = event.results[0][0].transcript
            const modifiedTranscript = addRandomDigitAfterEachWord(transcript)
            setTranscript((prevTranscript) => prevTranscript + ' ' + modifiedTranscript)
        }

        recognitionRef.current.onstart = () => {
            setListening(true)
        }

        recognitionRef.current.onend = () => {
            setListening(false)
        }
    }, [])

    const startRecognition = useCallback(() => {
        if (recognitionRef.current && !listening) {
            recognitionRef.current.start()
        }
    }, [listening])

    const stopRecognition = useCallback(() => {
        if (recognitionRef.current && listening) {
            recognitionRef.current.stop()
        }
    }, [listening])

    const clearTranscript = useCallback(() => {
        setTranscript('')
    }, [])

    const setText = useCallback((text: string) => {
        setTranscript(text)
    }, [])

    return { listening, transcript, startRecognition, stopRecognition, clearTranscript, setText };
};

export default useSpeechRecognition;
