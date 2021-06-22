import base_settings from "./base"


let local_settings = {
    ...base_settings,
    DEBUG: true,
    MESSAGE: 'This is local',
}


export default local_settings