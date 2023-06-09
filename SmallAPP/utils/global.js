const emailValid = (value) => {
    var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (value.match(validRegex)) {
        return true;
    } else {
        return false;
    }
}

export default {
    emailValid
}