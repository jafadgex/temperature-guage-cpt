let Temperature = 0
/**
 * created by: Jeremiah.omoike
 * 
 * November 8th
 */
basic.forever(function () {
    // variable
    Temperature = input.temperature()
    if (Temperature < 20) {
        // if the temperature is less than 20 degrees the temperature is set to 20 and the melody plays
        Temperature = 20
        music.playMelody("C C C C C C C C ", 500)
    } else if (Temperature < 25) {
        Temperature = 25
        music.playMelody("D D D D D D D D ", 500)
    } else if (Temperature < 27) {
        Temperature = 27
        music.playMelody("E E E E E E E E ", 500)
    } else if (Temperature < 30) {
        Temperature = 30
        music.playMelody("F F F F F F F F ", 500)
    } else if (Temperature < 35) {
        Temperature = 35
        music.playMelody("G G G G G G G G ", 120)
    } else if (Temperature < 37) {
        Temperature = 37
        music.playMelody("A A A A A A A A ", 120)
    } else if (Temperature < 40) {
        Temperature = 40
        music.playMelody("B B B B B B B B ", 500)
    } else if (Temperature < 45) {
        Temperature = 45
        music.playMelody("C5 C5 C5 C5 C5 C5 C5 C5 ", 120)
    } else if (Temperature < 49) {
        Temperature = 49
    } else if (Temperature < 50) {
        Temperature = 50
    } else {
    	
    }
    // low is 20 and highest is 32
    pins.servoWritePin(AnalogPin.P0, pins.map(
    Temperature,
    20,
    32,
    0,
    180
    ))
})
