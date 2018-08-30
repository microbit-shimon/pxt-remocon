//% weight=70 icon="\u702a" color=#FF0000 block="赤外線リモコン"
namespace remocon {

    //% blockId=send block="メーカー%v テレビ%vの電源を操作する"
    export function send(): void {
        let list = [
            3464, 1736, 426, 447, 386, 1248, 419, 447, 386, 447,
            386, 447, 386, 447, 387, 447, 385, 448, 392, 441,
            386, 447, 386, 447, 386, 448, 386, 447, 386, 1247,
            420, 447, 386, 447, 387, 447, 386, 447, 386, 448,
            390, 444, 385, 447, 386, 448, 386, 447, 386, 1246,
            421, 447, 386, 448, 385, 448, 386, 447, 386, 447,
            386, 448, 391, 442, 385, 448, 385, 1248, 419, 448,
            386, 1247, 420, 1247, 420, 1248, 419, 1247, 420, 447,
            386, 447, 386, 1247, 420, 447, 386, 1247, 420, 1248,
            419, 1246, 427, 1241, 421, 447, 386, 1247, 420
        ]
        let r = 0

        for (let i = 0; i <= list.length - 1; i++) {
            // Generate flashing signal
            if (i % 2 == 1) {
                // LED turns off
                control.waitMicros(list[i])
            }
            else {
                // LED flashes at 38 kHz cycle
                r = list[i]
                while (r > 26)
                    pins.digitalWritePin(DigitalPin.P0, 1)
                control.waitMicros(2)
                    pins.digitalWritePin(DigitalPin.P0, 0)
                r = r - 26
            }
        }
    }
}
