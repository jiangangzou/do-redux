export const storeChange = (state,action) => {
    switch(action.type) {
        case 'HEAD_COLOR':
             state.head.color = action.color
        break;
        case 'BODY_TEXY':
            state.body.text = action.text
        break;
        default: 
            return state;
    }
}