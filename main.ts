let T1 = 0
let T2 = 0
let T3 = 0
let Temperatura = 0
function TProm () {
    T1 = input.temperature()
    basic.pause(1000)
    T2 = input.temperature()
    basic.pause(1000)
    T3 = input.temperature()
    return (T1 + (T2 + T3)) / 3
}
basic.forever(function () {
    Temperatura = TProm()
    basic.pause(2000)
    if (Temperatura >= 25) {
        basic.showIcon(IconNames.Happy)
        basic.pause(2000)
    } else {
        basic.showIcon(IconNames.Sad)
        basic.pause(2000)
    }
    basic.showNumber(Temperatura)
})
