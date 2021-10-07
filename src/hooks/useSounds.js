import { useState, useEffect, useRef } from 'react';
import * as Tone from 'tone';

import Wilhelm from "assets/sounds/Wilhelm.wav";
import Vinyl from "assets/sounds/Vinyl.wav";
import Whoosh from "assets/sounds/Whoosh.wav";
import Sword from "assets/sounds/Sword.wav";
import Bip from "assets/sounds/Bip.wav";
import Acouphene from "assets/sounds/Acouphene.wav";
import SickTrack from "assets/sounds/SickTrack.mp3";
import LonelyJourney from "assets/sounds/LonelyJourney.mp3";
import SentimentalDrop from "assets/sounds/SentimentalDrop.mp3";

export default function useSounds(){
    const mySampler = useRef(null);
    const [isSevenPlayed, isSevenPlayedChange] = useState(false);
    const [isEightPlayed, isEightPlayedChange] = useState(false);
    const [isNinePlayed, isNinePlayedChange] = useState(false);
    const [isFourPlayed, isFourPlayedChange] = useState(false);
    const [isFivePlayed, isFivePlayedChange] = useState(false);
    const [isSixPlayed, isSixPlayedChange] = useState(false);
    const [isOnePlayed, isOnePlayedChange] = useState(false);
    const [isTwoPlayed, isTwoPlayedChange] = useState(false);
    const [isThreePlayed, isThreePlayedChange] = useState(false);

    useEffect(()=> {
        const sampler = new Tone.Sampler({
            "A4": LonelyJourney,
            "B4": SentimentalDrop,
            "C4": SickTrack,
            "D4": Acouphene,
            "E4": Bip,
            "A5": Sword,
            "B5": Whoosh,
            "C5": Vinyl,
            "D5": Wilhelm,
        }).toDestination();

        Tone.loaded().then(() => {
            mySampler.current = sampler;
        })
    }, []);

    function soundPlay(note, time) {
        mySampler.current.triggerAttackRelease([note], [time]);
    }

    function handleKeyDown({ key }) {
        switch (key) {
            case "7":
                isSevenPlayedChange(true);
                window.setTimeout(() => isSevenPlayedChange(false), 3000);
                soundPlay("A4", 370);
                break;
            case "8":
                isEightPlayedChange(true);
                window.setTimeout(() => isEightPlayedChange(false), 500);
                soundPlay("B4", 3);
                break;
            case "9":
                isNinePlayedChange(true);
                window.setTimeout(() => isNinePlayedChange(false), 1000);
                soundPlay("C4", 4);
                break;
            case "4":
                isFourPlayedChange(true);
                window.setTimeout(() => isFourPlayedChange(false), 800);
                soundPlay("D4", 3);
                break;
            case "5":
                isFivePlayedChange(true);
                window.setTimeout(() => isFivePlayedChange(false), 500);
                soundPlay("E4", 2);
                break;
            case "6":
                isSixPlayedChange(true);
                window.setTimeout(() => isSixPlayedChange(false), 500);
                soundPlay("A5", 2);
                break;
            case "1":
                isOnePlayedChange(true);
                window.setTimeout(() => isOnePlayedChange(false), 500);
                soundPlay("B5", 2);
                break;
            case "2":
                isTwoPlayedChange(true);
                window.setTimeout(() => isTwoPlayedChange(false), 500);
                soundPlay("C5", 5);
                break;
            case "3":
                isThreePlayedChange(true);
                window.setTimeout(() => isThreePlayedChange(false), 500);
                soundPlay("D5", 2);
                break;
            default:
                break;
        }
    }
    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    function handleSampleChange(note, file) {
        let fileURL = URL.createObjectURL(file);
        let buffer = new  Tone.Buffer(fileURL);
        mySampler.current.add(note, buffer, () =>
            alert("Sound sample changed")
        );
    }

    const buttonsList = [
        {soundPlay: ()=> 
            soundPlay("A4", 370), 
            isPlayed : isSevenPlayed, 
            id : "journey",
            handleSampleChange: (e) => handleSampleChange("A4", e.target.files[0]),
        },
        {soundPlay: ()=> 
            soundPlay("B4", 3), 
            isPlayed : isEightPlayed, 
            id : "drop",
            handleSampleChange: (e) => handleSampleChange("B4", e.target.files[0]),
        },
        {soundPlay: ()=> 
            soundPlay("C4", 4), 
            isPlayed : isNinePlayed, 
            id : "sick",
            handleSampleChange: (e) => handleSampleChange("C4", e.target.files[0]),
        }, 
        {soundPlay: ()=> 
            soundPlay("D4", 3), 
            isPlayed : isFourPlayed, 
            id : "acouphene",
            handleSampleChange: (e) => handleSampleChange("D4", e.target.files[0]),
        }, 
        {soundPlay: ()=> 
            soundPlay("E4", 2), 
            isPlayed : isFivePlayed, 
            id : "bip",
            handleSampleChange: (e) => handleSampleChange("E4", e.target.files[0]),
        }, 
        {soundPlay: ()=> 
            soundPlay("A5", 2), 
            isPlayed : isSixPlayed, 
            id : "sword",
            handleSampleChange: (e) => handleSampleChange("A5", e.target.files[0]),
        }, 
        {soundPlay: ()=> 
            soundPlay("B5", 2), 
            isPlayed : isOnePlayed, 
            id : "whoosh",
            handleSampleChange: (e) => handleSampleChange("B5", e.target.files[0]),
        }, 
        {soundPlay: ()=> 
            soundPlay("C5", 5), 
            isPlayed : isTwoPlayed, 
            id : "vinyl",
            handleSampleChange: (e) => handleSampleChange("C5", e.target.files[0]),
        }, 
        {soundPlay: ()=> 
            soundPlay("D5", 2), 
            isPlayed : isThreePlayed, 
            id : "whilhelm",
            handleSampleChange: (e) => handleSampleChange("D5", e.target.files[0]),
        }];
    return { buttonsList }; 
}
