input.onButtonPressed(Button.A, function () {
    active = true
    radio.sendNumber(1)
})
input.onButtonPressed(Button.AB, function () {
    active = Math.randomBoolean()
    if (active == true) {
        radio.sendNumber(1)
    } else {
        radio.sendNumber(0)
    }
})
input.onButtonPressed(Button.B, function () {
    active = false
    radio.sendNumber(0)
})
let active = false
radio.setGroup(183)
basic.forever(function () {
    if (active == true) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
