export const RECEIVE_NEW_AMOUNTS = "RECEIVE_NEW_AMOUNTS";
export const REMOVE_NEW_AMOUNTS = "REMOVE_NEW_AMOUNTS";

export const receiveNewAmounts = newAmounts => ({
    type: RECEIVE_NEW_AMOUNTS,
    newAmounts
});

export const removeNewAmounts = () => ({
    type: REMOVE_NEW_AMOUNTS
})