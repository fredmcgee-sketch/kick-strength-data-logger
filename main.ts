datalogger.onLogFull(function () {
    logging = false
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
input.onButtonPressed(Button.A, function () {
    logging = true
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.AB, function () {
    if (input.logoIsPressed()) {
        logging = false
        basic.showIcon(IconNames.Skull)
        datalogger.deleteLog()
    }
})
let logging = false
input.setAccelerometerRange(AcceleratorRange.EightG)
logging = false
basic.showIcon(IconNames.No)
datalogger.setColumnTitles("strength")
loops.everyInterval(100, function () {
    if (logging) {
        datalogger.log(datalogger.createCV("strength", input.acceleration(Dimension.Strength)))
    }
})
