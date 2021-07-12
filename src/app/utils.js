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

    warn = (...args) => {
        if(this.debug) {
            console.warn(...args)
        }
    }

    error = (...args) => {
        if(this.debug) {
            console.error(...args)
        }
    }
}

const conutils = new Con()
export default conutils