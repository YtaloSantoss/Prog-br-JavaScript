function speakGeneric() {
    
    console.log(this.sound)

}

let dog = {
    sound: "Au Au",
    speak: speakGeneric
}

let cat = {
    sound: "Miau",
    speak: speakGeneric
}

let bindedFunction = speakGeneric.bind(cat);

let bindedFunction2 = speakGeneric.bind(dog);

bindedFunction()
bindedFunction2()