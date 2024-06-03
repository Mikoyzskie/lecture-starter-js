/* eslint-disable prettier/prettier */
import showModal from './modal';
import { createFighterImage } from '../fighterPreview';

export default function showWinnerModal(fighter) {
    // call showModal function
    const image = createFighterImage(fighter);
    const winner = {
        title: `${fighter.name} wins!`,
        bodyElement: image
    };
    showModal(winner);
}
