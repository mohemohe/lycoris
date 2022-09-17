import { ChangeEvent } from "react";
import { useAudioDevices } from "../../hooks/useAudioDevices"
import { useRecoilState } from 'recoil';
import { audioDeviceState } from "../../store/atoms/audioDeviceState";

const AudioDevices = (): JSX.Element => {
    const audioDevices = useAudioDevices()
    const [_, setAudioDevice] = useRecoilState(audioDeviceState)

    const change = (e: ChangeEvent<HTMLSelectElement>) => {
        const deviceId = parseInt(e.target.value, 10)
        setAudioDevice(deviceId)
    }

    return (
        <select className="select select-bordered w-full max-w-xs focus:outline-none" name="audio-devices" onChange={change} defaultValue="mic-selector">
            <option disabled value="mic-selector">マイクを選択してください</option>
            {audioDevices?.map((device, i) => (
                <option key={"audio-device" + i} value={device.device_id}>{device.label}</option>
            ))}
        </select>
    )
}

export { AudioDevices }
