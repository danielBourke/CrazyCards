import { GET_CARDS } from "app/actions/card";
import expect from "expect";
import accountReducer from "../reducers/accountReducer";
import { fullListCards, expectedFullListCards } from "./mockData";

const initialState = {};

const afterInitialState = {
  cards: {},
  eligiblecards: {},
};

describe("test accountsReducer", () => {
  it("should return the initial state", () => {
    expect(accountReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle GET_CARDS", () => {
    const eventStateUpdate = {
      type: GET_CARDS,
      payload: fullListCards,
    };

    expect(accountReducer(afterInitialState, eventStateUpdate)).toEqual(
      expectedFullListCards
    );
  });
});
