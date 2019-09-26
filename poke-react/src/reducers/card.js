import { CREATE_CARD, DELETE_CARD } from "../constants/card";

const DEFAULT_STATE ={
    cards: []
}

export default function cardReducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case CREATE_CARD:
            return {
                ...state,
                cards: [...state.cards, action.payload]
            };
        case DELETE_CARD:
            return {
                ...state,
                cards: state.cards.filter((card, id) => {
                    return id !== action.payload;
                })
            };

            default:
                return state;
    }
}

