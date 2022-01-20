export default function validateInfo(values) {
    let errors = {}

    if (!values.username.trim()) {
        errors.username = "Username required"
    } else if (values.username !== "admin@gmail.com") {
        errors.username = "Username doesn't match!"
    } 


    if (!values.password) {
        errors.password = "Password required"
    } else if (values.password.length < 4) {
        errors.password = "Password must be at least 4 characters"
    } else if (values.password !== "admin") {
        errors.password = "Password doesn't match!"
    }
    return errors;
}
