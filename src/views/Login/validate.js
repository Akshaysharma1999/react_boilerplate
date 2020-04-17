export default (formValues) => {
    const errors = {}

    if (!formValues.username) {
        errors.username = 'You must enter a username'
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.username)) {
        errors.username = 'Email is not valid'
    }

    if (!formValues.password) {
        errors.password = 'You must enter a password'
    }

    return errors
}