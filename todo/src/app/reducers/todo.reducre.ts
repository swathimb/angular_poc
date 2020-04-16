import { Todo } from '../models/todo';
import * as TodoActions from '../actions/todo.actions';

const initialState = [];

export function reducer(state = initialState, action: TodoActions.Actions) {

    switch (action.type) {
        case TodoActions.ADD_TODO:
            return [...state, action.payload];
        case TodoActions.REMOVE_TODO:
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
              ];
        case TodoActions.UPDATE_TODO:
            const index  = action.index;
            return [
                ...state.slice(0, index),
                Object.assign({}, state[index], action.payload),
                ...state.slice(index + 1)
            ];
        default:
            return state;
    }
}
