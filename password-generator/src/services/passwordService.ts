const generatePassword = () => {
    let password: string = '';
    let characters: string = 'Aa@#1234567890!$%¨&*()_+';
    const PASSWORD_MAX_LENGTH: number = 8;

    for (let i = 0; i < PASSWORD_MAX_LENGTH; i++) {
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        );
    }

    return password;
}

export default generatePassword;