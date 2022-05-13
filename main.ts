basic.showNumber(7)
basic.pause(5000)
basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        basic.pause(200)
    } else {
        if (maqueen.Ultrasonic(PingUnit.Centimeters) <= 20) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
            basic.pause(200)
        } else {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
            maqueen.motorStop(maqueen.Motors.M2)
        }
    }
})
