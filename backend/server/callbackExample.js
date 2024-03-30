console.log('A')

const myfunc = (mystr)=> {
    console.log('in myfunc', mystr)
}

function myfunc2(myst) {
    console.log('in myfunc2', myst)
}

function main(callback1, callback2) {
    callback1('Hellooo');

    setTimeout(() => {
    }, 10000)

    callback2('World!');
}

main(myfunc, myfunc2)