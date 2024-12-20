import { UserService } from "../api/userService";
import {UserServiceFactory} from "../api/userServiceFactory";


export class UserServiceFactoryImpl extends UserServiceFactory {

    configure(map: Map<string, number>): void {
    }

    public createService(): UserService | undefined {
        return undefined;
    }
}