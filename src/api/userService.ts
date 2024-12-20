
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

    getUser(id1: number): UserDto | undefined;

    removeUser(id1: number): UserDto | undefined;

    addUserListener(userListener: UserListener): void;

}