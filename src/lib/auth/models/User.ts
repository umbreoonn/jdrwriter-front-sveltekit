export type User = {
    id: number;
    username: string;
    mail: string;
}

export type UserCredentials = Pick<User, 'username'> & { password: string };