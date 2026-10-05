Maqueen_V5.I2CInit()
let giro = 0
basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    if (Maqueen_V5.Ultrasonic() < 15) {
        maqueen.motorStop(maqueen.Motors.All)
        basic.showIcon(IconNames.No)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 100)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 100)
        basic.pause(500)
        if (giro == 0) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 100)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
            basic.showArrow(ArrowNames.West)
            giro = 1
            basic.pause(500)
        }
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 100)
        basic.showArrow(ArrowNames.East)
        giro = 0
        basic.pause(500)
    }
})
