import { CREATE_CARD } from "../constants/card";

export function createNewCard(name, nationalPokedexNumber, imageUrl, imageUrlHiRes, supertype, subtype, number, artist, rarity) {
    return {
        type: CREATE_CARD,
        payload: {
                name,
                nationalPokedexNumber,
                imageUrl,
                imageUrlHiRes,
                supertype,
                subtype,
                number,
                artist,
                rarity
        }
    }
}

// export const deleteCard = name => ({type: DELETE_CARD, payload: name})