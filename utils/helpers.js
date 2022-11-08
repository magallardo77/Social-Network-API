function emailValidate(value) {
    const regexEmailValidator = '/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/'
    return regexEmailValidator.test(value);
};



module.exports = 