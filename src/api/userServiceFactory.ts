import { UserService } from "./userService";

export abstract class UserServiceFactory {

    public static createFactory(map: Map<string, number> | undefined, impl: UserServiceFactory): UserServiceFactory {
        impl.configure(map);
        return impl;
    }

    abstract configure(map: Map<string, number> | undefined): void;

    public abstract createService(): UserService | undefined;

}

