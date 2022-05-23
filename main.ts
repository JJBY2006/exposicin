input.onButtonPressed(Button.A, function () {
    basic.showNumber(Sensor_botellas)
    basic.pause(200)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    Nivel_Botellas = 0
    Sensor_Botella = 0
})
let Sensor_Botella = 0
let Nivel_Botellas = 0
let Sensor_botellas = 0
Sensor_botellas = 0
let Nivel__botellas = 0
basic.forever(function () {
    Sensor_Botella = 0
    while (Nivel_Botellas == 50) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    if (Sensor_Botella == 1) {
        basic.showIcon(IconNames.Heart)
        music.playMelody("C5 B A G F E D C ", 200)
        basic.clearScreen()
        Nivel_Botellas += 1
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
