import local_settings from "./local"
import production_settings from "./production"
import ENVIRONMENT from "../../env"


let settings
if(ENVIRONMENT === 'local') {
    settings = {...local_settings}
}
else {
    settings = {...production_settings}
}

export default settings