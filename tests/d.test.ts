import { UserService } from "../src/api/userService";
import { UserServiceFactoryImpl } from "../src/impl/userServiceFactoryImpl";
import { UserServiceFactory } from "../src/api/userServiceFactory";

describe('User References Tests', () => {
    let userSvc: UserService | undefined;
    const id1 = 4;
    const name1 = 'dean';

    beforeEach(() => {
        const factory = UserServiceFactory.createFactory(undefined, new UserServiceFactoryImpl());
        userSvc = factory.createService();
    });

    test('should maintain original reference despite modifications', () => {
        if (!userSvc) {
            throw new Error('User service should exist here');
        }

        // Create a user and modify the local reference
        const employee = userSvc.createUser(id1, name1, 'hiller');
        employee.id = 5;  // Modify ID locally
        employee.firstName = "xxx";  // Modify name locally

        // Retrieve the user from the service
        const employee2 = userSvc.getUser(id1);
        if (!employee2) {
            throw new Error(`User with id ${id1} should exist`);
        }
        expect(employee2.id).toBe(id1);
        expect(employee2.firstName).toBe(name1);
    });
});
