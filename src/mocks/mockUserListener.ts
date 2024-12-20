import {UserDto, UserListener} from "../api/userService";

export class MockUserListener implements UserListener {
    public userCreatedRequestList: UserDto[] = [];
    public userRemovedRequestList: UserDto[] = [];

    userCreated(user: UserDto): void {
        this.userCreatedRequestList.push(user);
    }

    userRemoved(user: UserDto): void {
        this.userRemovedRequestList.push(user);
    }
}
