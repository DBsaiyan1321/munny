export const RECEIVE_NEW_AMOUNTS = "RECEIVE_NEW_AMOUNTS";

export const receiveNewAmounts = newAmounts => ({
    type: RECEIVE_NEW_AMOUNTS,
    newAmounts
});