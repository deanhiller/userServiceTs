
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

    createUser(id: number, firstName: string, lastName: string): UserDto;

    getUser(id: number): UserDto | undefined;

    removeUser(id: number): UserDto | undefined;

    addUserListener(userListener: UserListener): void;

}