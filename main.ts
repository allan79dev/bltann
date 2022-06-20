bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Happy)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Sad)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Hash), function () {
    CMD = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
    basic.showString(CMD)
    bluetooth.uartWriteString(CMD)
    basic.showIcon(IconNames.Heart)
})
let CMD = ""
basic.showIcon(IconNames.Asleep)
basic.forever(function () {
	
})
