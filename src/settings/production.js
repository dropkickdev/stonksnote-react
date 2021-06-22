import base_settings from "./base"


let production_settings = {
    ...base_settings,
    DEBUG: false,
    MESSAGE: 'This is production',
}


export default production_settings