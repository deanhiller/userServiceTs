
export class UserDto {
    public id?: number;
    public firstName?: string;
    public lastName?: string;
}

export interface UserListener {

    userCreated(user: UserDto): void;

    userRemoved(user: UserDto): void;

}

export interface UserService {

    createUser(id1: number, name1: string, hiller: string): UserDto;

    getUser(id1: number): UserDto;

    removeUser(id1: number): UserDto;

    addUserListener(userListener: UserListener): void;

}