import base_settings from "./base"


let local_settings = {
    ...base_settings,
    DEBUG: true,
    MESSAGE: 'This is local',
    AXIOS_BASEURL: 'http://localhost:9000',
}


export default local_settings