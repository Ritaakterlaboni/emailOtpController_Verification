function passwordValidation(password){
    const passRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    return passRegex.test(password)
}

module.exports = passwordValidation