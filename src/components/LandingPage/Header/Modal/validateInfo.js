export default function validateInfo(values) {
    let errors = {};

    //Name
    if (!values.registerName.trim()) {
        errors.registerName = "Login jest wymagany";
    }

    //Email
    if (!values.userEmail) {
        errors.userEmail = "Email jest wymagany";
    } else if (!/\S+@\S+\.\S+/.test(values.userEmail)) {
        errors.userEmail = "Email jest niepoprawny";
    }

    if (!values.registerEmail) {
        errors.registerEmail = "Email jest wymagany";
    } else if (!/\S+@\S+\.\S+/.test(values.registerEmail)) {
        errors.registerEmail = "Email jest niepoprawny";
    }

    // Password
    if (!values.userPassword) {
        errors.userPassword = "Hasło jest wymagane";
    } else if (values.userPassword.length < 6) {
        errors.userPassword = "Hasło musi posiadać minimum 6 znaków";
    }

    if (!values.registerPassword) {
        errors.registerPassword = "Hasło jest wymagane";
    } else if (values.registerPassword.length < 6) {
        errors.registerPassword = "Hasło musi posiadać minimum 6 znaków";
    }

    //Password 2 - sprawdzenie zgodności z password 1
    // if (!values.password2) {
    //     errors.password2 = "Password is required";
    // } else if (values.password2 !== values.userPassword) {
    //     errors.password2 = "Passwords do not match";
    // }

    return errors;
}