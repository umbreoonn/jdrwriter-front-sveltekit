export type User = {
    id: number;
    username: string;
    mail: string;
    password: string;
}

export type UserCreationPayload = Omit<User, 'id'>
export type UserRegisterForm = UserCreationPayload & {
    passwordConfirmation: string;
};
export type UserCredentials = Omit<UserCreationPayload, 'mail' >;