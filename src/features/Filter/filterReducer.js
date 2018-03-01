import {
  SEARCH_BY_NAME,
  SORT_BY_PRICE,
} from './types';

const initialState = {
  searchValue: '',
  sortByPrice: false,
};

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_BY_NAME:
      return {
        ...state,
        searchValue: action.payload,
      };

    case SORT_BY_PRICE:
      return {
        ...state,
        sortByPrice: true,
      };

    default:
      return state;
  }
}