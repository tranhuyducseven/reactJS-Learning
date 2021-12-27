
function logger(reducer) {
    return (prevState, action) => {
        console.group(action.type);
        console.log('Prev state: ' + prevState);
        console.log('Action: ' + action);
        const nextSate = reducer(prevState, action)
        console.log('Next state: ' + nextSate);
        console.groupEnd()
        return nextSate
    }
}
export default logger