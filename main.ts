遥控器.onPressEvent(RemoteButton.Left, function () {
    小车.CarCtrlSpeed2(小车.CarState.Car_Run, 200, 150)
})
遥控器.onPressEvent(RemoteButton.Down, function () {
    小车.CarCtrlSpeed(小车.CarState.Car_SpinRight, 200)
})
遥控器.onPressEvent(RemoteButton.Power, function () {
    小车.CarCtrl(小车.CarState.Car_Stop)
})
遥控器.onPressEvent(RemoteButton.Right, function () {
    小车.CarCtrlSpeed2(小车.CarState.Car_Back, 150, 200)
})
遥控器.onPressEvent(RemoteButton.Up, function () {
    小车.CarCtrlSpeed(小车.CarState.Car_SpinLeft, 200)
})
let colorValue = 0
basic.showIcon(IconNames.Happy)
小车.RGB_Car_Big2(小车.enColor.Red)
遥控器.init(Pins.P8)
basic.forever(function () {
    colorValue = 0
    for (let 索引 = 0; 索引 <= 2; 索引++) {
        if (colorValue == 0) {
            小车.RGB_Car_Big(255, 0, 0)
        } else {
            if (colorValue == 1) {
                小车.RGB_Car_Big(0, 255, 0)
            } else {
                小车.RGB_Car_Big(0, 0, 255)
            }
        }
    }
    basic.pause(500)
    colorValue = colorValue + 1
})
