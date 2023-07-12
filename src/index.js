const refObj = {
    country:'Italy',
    food:'pasta',
    footballLeague:'Serie-A'
}

const newRefObj={
    ...refObj,
    winner:'AC-Milan'
}

console.log(newRefObj);