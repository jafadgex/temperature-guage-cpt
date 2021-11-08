let Temperature = 0
basic.forever(function () {
    Temperature = input.temperature()
    if (Temperature < 20) {
        Temperature = 20
    } else if (Temperature < 35) {
        Temperature = 35
    } else {
    	
    }
    pins.servoWritePin(AnalogPin.P0, pins.map(
    Temperature,
    20,
    32,
    0,
    180
    ))
})
