const refObj = {
    country:'Italy',
    food:'pasta',
    footballLeague:'Serie-A'
}

const newRefObj={
    ...refObj,
    winner:'Napoli'
}

console.log(newRefObj);