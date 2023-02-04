import * as styleLogo from "./logoStyle"
import logo from "../../assets/logo.jpg"

interface image {
    size: number
}

export function Logo({size}: image) {
    return (
        <styleLogo.Logo src={logo} style={{width: size, height: size}}/>
    )
}