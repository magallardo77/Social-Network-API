module.exports = {
    emailValidate: function (value) {
        const regexEmailValidator = '/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/'
        return regexEmailValidator.test(value);
    },

    dateFormat: function (timestamp) {
        return timestamp.toLocaleTimeString('en-US');
    },

}