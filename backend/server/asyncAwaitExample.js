console.log('A')

async function myfunc2(){
    setTimeout(()=>{
        console.log('After 8 secs')
    }, 8000)
}

async function myfunc() {
    await myfunc2()
    setTimeout(() => {
        console.log('10secs Timeout over');
    }, 10000)

    
}


myfunc()
console.log('B')
console.log('c')
console.log('D')
console.log('E')
console.log('F')