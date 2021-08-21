export type SignInType = {
    email: string;
    password: string;
};

export type SignInSocialType = {
    type: string;
    token: string;
};

export type SignUpType = {
    email: string;
    name: string;
    password: string;
    emailToken: string;
};

export type VerifyEmailType = {
    email: string;
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