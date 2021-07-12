let base_settings = {
    DEBUG: false,
    MESSAGE: 'This is base',

    AXIOS_BASEURL: '',

    // Auth
    ACCESS_TOKEN_API: '/auth/token',

    // Redirects
    REDIRECT_PRIVATE_ONLY: '/auth/login',
    REDIRECT_PUBLIC_ONLY: '/',

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