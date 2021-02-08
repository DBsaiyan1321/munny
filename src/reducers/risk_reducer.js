const riskReducer = (initialState = {}, action) => { 
    Object.freeze(initialState); 
    switch (action.type) {
        case 1:
            return Object.assign({}, initialState, {
                risk: 1,
                bonds: 80,
                largeCap: 20, 
                midCap: 0, 
                foreign: 0,
                smallCap: 0, 
            });
        case 2:
            return Object.assign({}, initialState, {
                risk: 2,
                bonds: 70,
                largeCap: 15,
                midCap: 15,
                foreign: 0,
                smallCap: 0, 
            });
        case 3:
            return Object.assign({}, initialState, {
                risk: 3,
                bonds: 60,
                largeCap: 15,
                midCap: 15,
                foreign: 10,
                smallCap: 0, 
            });
        case 4:
            return Object.assign({}, initialState, {
                risk: 4,
                bonds: 50,
                largeCap: 20,
                midCap: 20,
                foreign: 10,
                smallCap: 0, 
            });
        case 5:
            return Object.assign({}, initialState, {
                risk: 5,
                bonds: 40,
                largeCap: 20,
                midCap: 20,
                foreign: 20,
                smallCap: 0, 
            });
        case 6:
            return Object.assign({}, initialState, {
                risk: 6,
                bonds: 35,
                largeCap: 25,
                midCap: 5,
                foreign: 30,
                smallCap: 5, 
            });
        case 7:
            return Object.assign({}, initialState, {
                risk: 7,
                bonds: 20,
                largeCap: 25,
                midCap: 25,
                foreign: 25,
                smallCap: 5, 
            });
        case 8:
            return Object.assign({}, initialState, {
                risk: 8,
                bonds: 10,
                largeCap: 20,
                midCap: 40,
                foreign: 20,
                smallCap: 10, 
            });
        case 9:
            return Object.assign({}, initialState, {
                risk: 9,
                bonds: 5,
                largeCap: 15,
                midCap: 40,
                foreign: 25,
                smallCap: 15, 
            });
        case 10:
            return Object.assign({}, initialState, {
                risk: 10,
                bonds: 0,
                largeCap: 5,
                midCap: 25,
                foreign: 30,
                smallCap: 40, 
            });
        default:
            return initialState;
    }
};

export default riskReducer;