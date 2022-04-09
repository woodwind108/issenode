let input2 = 0
input.onButtonPressed(Button.A, function () {
    input2 = 1
})
input.onButtonPressed(Button.AB, function () {
    input2 = 2
})
input.onButtonPressed(Button.B, function () {
    input2 = 1
})
basic.forever(function () {
    while (true) {
        input2 = 0
        basic.showNumber(3)
        basic.showNumber(2)
        basic.showNumber(1)
        basic.clearScreen()
        basic.pause(500)
        if (input2 == randint(0, 2)) {
            basic.showNumber(input2)
            basic.clearScreen()
            basic.pause(100)
            basic.showNumber(input2)
            basic.clearScreen()
            basic.pause(100)
            basic.showNumber(input2)
        } else {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
            basic.pause(400)
        }
        basic.clearScreen()
        basic.pause(500)
    }
})
