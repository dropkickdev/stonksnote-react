let base_settings = {
    DEBUG: false,
    MESSAGE: 'This is base',

    AXIOS_BASEURL: '',

    // URLs
    LOGIN_URL: '/login',
    LOGOUT_URL: '/logout',
    REGISTER_URL: '/register',
    LOST_PASSWORD_URL: '/lost-password',
    CHANGE_PASSWORD_URL: '/change-password',

    // Auth
    ACCESS_TOKEN_URL: '/token',

    NOTIFICATION: {
        REGISTER_OK_URL: '/n/registration-ok',
        ACTIVATION_SENT_OK_URL: '/n/activation-sent-ok',
        ACTIVATION_SENT_FAIL_URL: '/n/activation-sent-fail',
        ACTIVATION_OK_URL: '/n/activation-ok',
        ACTIVATION_FAIL_URL: '/n/activation-fail',
        RESET_PASSWORD_OK_URL: '/n/password-reset-ok',
        RESET_PASSWORD_FAIL_URL: '/n/password-reset-fail',
    },

    ERROR_401_URL: '/'

}

export default base_settings