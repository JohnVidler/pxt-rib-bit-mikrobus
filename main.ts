//% block="Rib:Bit MikroBUS"
//% color="#7b7ff2"
//% icon="\u26A0"
//% groups=[ "Serial Port", "Pin Functions" ]
namespace RibBitMBus {
    //% block="switch microbus $state \u26A0"
    //% blockId="ribbit_mbus_switchBus"
    export function switchMBus(state: RibBit.OnOff = RibBit.OnOff.On): void {
        if(state == RibBit.OnOff.On)
            RibBit.ribbit_cmd( RibBit.Device.MBUS, RibBit.Command.POWER_ENABLE );
        else
            RibBit.ribbit_cmd( RibBit.Device.MBUS, RibBit.Command.POWER_DISABLE );
    }

    //% block="mikroBUS serial write line $text \u26A0"
    //% blockId="ribbit_mbus_serialwriteline"
    //% group="Serial Port"
    export function serialWriteLine(text: string): void {
        return serialWriteString(`${text}\n`);
    }

    //% block="mikroBUS serial write value $field = $value \u26A0"
    //% blockId="ribbit_mbus_serialwritevalue"
    //% group="Serial Port"
    //% value.shadow=math_number
    export function serialWriteValue(field: string, value: any): void {
        return;
    }

    //% block="mikroBUS serial write number $value \u26A0"
    //% blockId="ribbit_mbus_serialwritenumber"
    //% group="Serial Port"
    export function serialWriteNumber(value: number = 0): void {
        return;
    }

    //% block="mikroBUS serial write string $text \u26A0"
    //% blockId="ribbit_mbus_serialwritetext"
    //% group="Serial Port"
    export function serialWriteString(text: string): void {
        return;
    }

    //% block="mikroBUS serial write numbers $values \u26A0"
    //% blockId="ribbit_mbus_serialwritenumbers"
    //% group="Serial Port"
    export function serialWriteNumbers(values: Array<number>): void {
        return serialWriteString(`${values.join(", ")}\n`);
    }

    //% block="mikroBUS serial read line \u26A0"
    //% blockId="ribbit_mbus_serialreadline"
    //% group="Serial Port"
    export function serialReadLine(): string {
        return "";
    }

    //% block="mikroBUS serial read until $delimiter \u26A0"
    //% blockId="ribbit_mbus_serialreaduntil"
    //% group="Serial Port"
    export function serialReadUntil(delimiter: string): string {
        return "";
    }

    //% block="mikroBUS serial read string \u26A0"
    //% blockId="ribbit_mbus_serialreadstring"
    //% group="Serial Port"
    export function serialReadString(): string {
        return "";
    }

    //% block="set mikroBUS serial baud to $baud \u26A0"
    //% blockId="ribbit_mbus_serialsetbaud"
    //% group="Serial Port"
    //% advanced="true"
    //% baud.defl=RibBit.SerialBaud.BAUD_9600
    export function serialSetBaud(baud: RibBit.SerialBaud = RibBit.SerialBaud.BAUD_9600 ): void {
        RibBit.ribbit_set_baud( baud );
    }

    //% block="on mikroBUS string received \u26A0"
    //% blockId="ribbit_mbus_onstringreceived"
    //% draggableParameters="inline"
    //% group="Serial Port"
    //% advanced="true"
    export function onStringReceived(cb: (text: string) => void): void {
        return
    }

    //% block="on mikroBUS $delimiter received \u26A0"
    //% blockId="ribbit_mbus_ondelimiterreceived"
    //% draggableParameters="inline"
    //% group="Serial Port"
    //% advanced="true"
    export function onDelimiterReceived(cb: (text: string) => void, delimiter: string = "\n"): void {
        return
    }

    //% block="mikroBUS serial bytes available \u26A0"
    //% blockId="ribbit_mbus_bytesavailable"
    //% group="Serial Port"
    export function getBytesAvailable(): number {
        return 0;
    }

    //% block="set mikroBUS PWM pin to $value \u26A0"
    //% blockId="ribbit_mbus_setpwm"
    //% group="Pin Functions"
    export function setPWMPin(value: number = 0): void {
        pins.servoSetPulse( AnalogPin.P0, value );
        return;
    }

    //% block="mikroBUS analog pin value \u26A0"
    //% blockId="ribbit_mbus_analogread"
    //% group="Pin Functions"
    export function analogRead(): number {
        return pins.analogReadPin( AnalogPin.P1 );
    }

    //% block="mikroBUS analog pin set value to $value \u26A0"
    //% blockId="ribbit_mbus_analogwrite"
    //% group="Pin Functions"
    export function analogWrite(value: number = 0): void {
        pins.analogWritePin( AnalogPin.P1, value );
        return;
    }

    //% block="set mikroBUS select line to $state \u26A0"
    //% blockId="ribbit_mbus_select"
    //% state.shadow=toggleOnOff
    //% state.defl=false
    //% group="Pin Functions"
    //% advanced="true"
    export function spiSelectMBus(state: boolean): void {
        // Always assert all other devices as offline via marking an invalid device as 'selected'
        RibBit.ribbit_cmd(RibBit.Device.INVALID, RibBit.Command.SPI_SELECT);

        if( state === true )
            pins.digitalWritePin( DigitalPin.P12, 0 );
        else
            pins.digitalWritePin( DigitalPin.P12, 1 );
    }

    //% block="reset mikroBUS port \u26A0"
    //% blockId="ribbit_mbus_reset"
    //% group="Pin Functions"
    //% advanced="true"
    export function setResetPin(): void {
        RibBit.ribbit_cmd( RibBit.Device.MBUS, RibBit.Command.RESET_DEVICE )
    }
}