import { SetStateAction, useState } from "react"

type useToggleReturnTypes = {
    value: boolean,
    toggle: (value: boolean) => void;
}

export default function useToggle(initialValue: boolean = false): useToggleReturnTypes {
    const [value, setValue] = useState(initialValue);
    function toggle(value: boolean) {
        if (value) return setValue(value);
        setValue(previousValue => !previousValue);
    }
    return { value, toggle }
}
