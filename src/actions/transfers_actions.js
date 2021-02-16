export const RECEIVE_TRANSFERS = "RECEIVE_TRANSFERS";

export const receiveTransfers = transfers => ({ 
    type: RECEIVE_TRANSFERS, 
    transfers
});