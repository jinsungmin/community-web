export type SignInType = {
    email: string;
    password: string;
};

export type SignUpType = {
    email: string;
    name: string;
    password: string;
    birth: string;
    gender: string;
    code: string | null;
    type: string;
    phone: string;
    phoneToken: string;
    emailToken: string | null;
    profileUrl: string | null;
};

export type SignUpExpertType = {
    email: string;
    password: string;
    code: string;
    type: string;
}

export type VerifyEmailType = {
    email: string;
    type: string;
}

export type SignUpVerifyPhoneType = {
    info: string;
    infoType: string;
    type: string;
}

export type SignUpVerifyConfirmType = {
    code: string;
    codeToken: string | undefined;
}

export type ResetPasswordType = {
    email: string;
    emailToken: string;
    password: string;
};

export type UpdatePasswordType = {
    password: string;
    newPassword: string;
}