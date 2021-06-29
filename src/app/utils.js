import s from "./settings/settings"

class Con {
    debug = s.DEBUG

    log = (...args) => {
        if(this.debug) {
            console.log(...args)
        }
    }

    table = (...args) => {
        if(this.debug) {
            console.table(...args)
        }
    }
}

const con = new Con()
export default con