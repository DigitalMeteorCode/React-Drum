import { useEffect, useRef } from 'react';
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
                soundPlay("A4", 370);
                break;
            case "8":
                soundPlay("B4", 3);
                break;
            case "9":
                soundPlay("C4", 4);
                break;
            case "4":
                soundPlay("D4", 3);
                break;
            case "5":
                soundPlay("E4", 2);
                break;
            case "6":
                soundPlay("A5", 2);
                break;
            case "1":
                soundPlay("B5", 2);
                break;
            case "2":
                soundPlay("C5", 5);
                break;
            case "3":
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

    const buttonsList = [
        {soundPlay: ()=> soundPlay("A4", 370)},
        {soundPlay: ()=> soundPlay("B4", 3)},
        {soundPlay: ()=> soundPlay("C4", 4)}, 
        {soundPlay: ()=> soundPlay("D4", 3)}, 
        {soundPlay: ()=> soundPlay("E4", 2)}, 
        {soundPlay: ()=> soundPlay("A5", 2)}, 
        {soundPlay: ()=> soundPlay("B5", 2)}, 
        {soundPlay: ()=> soundPlay("C5", 5)}, 
        {soundPlay: ()=> soundPlay("D5", 2)}];
    return { buttonsList }; 
}
