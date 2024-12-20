import { UserService } from "../src/api/userService";
import { UserServiceFactoryImpl } from "../src/impl/userServiceFactoryImpl";
import { UserServiceFactory } from "../src/api/userServiceFactory";
import {MockUserListener} from "../src/mocks/mockUserListener";

describe('UserService Tests', () => {
    let userSvc: UserService | undefined;
    let mockUserListener: MockUserListener;
    const id1 = 4;
    const id2 = 5;
    const name1 = 'dean';

    beforeEach(() => {
        mockUserListener = new MockUserListener();

        const factory = UserServiceFactory.createFactory(undefined, new UserServiceFactoryImpl());
        userSvc = factory.createService();

        if (userSvc) {
            userSvc.addUserListener(mockUserListener);
        }
    });

    test('should add users correctly', () => {
        if (!userSvc) {
            throw new Error('User service should exist here');
        }

        const name2 = 'Yun';

        // Add first user
        userSvc.createUser(id1, name1, 'hiller');
        expect(mockUserListener.userCreatedRequestList.length).toBe(1);

        // Add second user
        userSvc.createUser(id2, name2, 'Xu');
        expect(mockUserListener.userCreatedRequestList.length).toBe(2);

        // Retrieve and verify first user
        const employeeRes = userSvc.getUser(id1);
        if (!employeeRes) {
            throw new Error(`User with id ${id1} should exist`);
        }
        expect(employeeRes).not.toBeNull();
        expect(employeeRes.id).toBe(id1);
        expect(employeeRes.firstName).toBe(name1);

        // Retrieve and verify second user
        const employeeRes2 = userSvc.getUser(id2);
        if (!employeeRes2) {
            throw new Error(`User with id ${id2} should exist`);
        }
        expect(employeeRes2.id).toBe(id2);
        expect(employeeRes2.firstName).toBe(name2);
    });
});
