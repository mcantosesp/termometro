radio.onReceivedNumber(function (receivedNumber) {
    if (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            # # # . .
            # . . . .
            # # # . .
            # . . . .
            # # # . .
            `)
        basic.showNumber(receivedNumber)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.showNumber(tenpInt)
})
let tenpInt = 0
radio.setGroup(5)
basic.forever(function () {
    tenpInt = input.temperature()
    tenpInt = tenpInt - 0
})
