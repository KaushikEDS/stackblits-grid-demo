import { createReducer, on } from '@ngrx/store/src/reducer_creator';
import { fetchData } from '../actions';

const initialState = {
  data: [],
};

const gridReducer = createReducer(
  initialState,
  on(fetchData, (state, {}) => {
    return state;
  })
);
