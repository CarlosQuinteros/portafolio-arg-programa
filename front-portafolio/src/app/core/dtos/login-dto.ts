export class LoginDto {
    username: string;
    password: string;

    constructor(userName: string, password: string) {
        this.username = userName;
        this.password = password;
    }
}
