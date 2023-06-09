import { Constants } from ".";

const emailValid = (value) => {
    var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (value.match(validRegex)) {
        return true;
    } else {
        return false;
    }
}

const getStatusColor = (value) => {
    switch (value) {
        case 'active':
            return [Constants.colors.active, Constants.colors.active_text]
        case 'inactive':
            return [Constants.colors.inactive, Constants.colors.inactive_text]
        default:
            return [Constants.colors.active, Constants.colors.active_text]
    }
}

export default {
    emailValid,
    getStatusColor
}