let T1 = 0
let T3 = 0
let Temperatura = 0
function TProm (núm: number) {
    let T2 = 0
    T1 = input.temperature()
    basic.pause(1000)
    T3 = input.temperature()
    basic.pause(1000)
    T3 = input.temperature()
    basic.showNumber(T1 + (T2 + T3 / 3))
}
basic.forever(function () {
    Temperatura = 26
    if (Temperatura >= 25) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
        basic.pause(2000)
    }
    basic.showNumber(Temperatura)
})
