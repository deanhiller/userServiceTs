import { UserService } from "../src/api/userService";
import { UserServiceFactoryImpl } from "../src/impl/userServiceFactoryImpl";
import { UserServiceFactory } from "../src/api/userServiceFactory";
import {MockUserListener} from "../src/mocks/mockUserListener";

describe('Remove User Tests', () => {
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

        // Adding users to set up state for removal test
        if (userSvc) {
            userSvc.createUser(id1, name1, 'hiller');
            userSvc.createUser(id2, 'Yun', 'Xu');
        }
    });

    test('should remove users correctly', () => {
        if (!userSvc) {
            throw new Error('User service should exist here');
        }

        // Remove the first user
        const removedEmployee = userSvc.removeUser(id1);
        if (!removedEmployee) {
            throw new Error(`User with id ${id1} should exist`);
        }
        expect(removedEmployee.id).toBe(id1);
        expect(removedEmployee.firstName).toBe(name1);

        // Check listener recorded the removal
        expect(mockUserListener.userRemovedRequestList.length).toBe(1);
        const recordedRemovedEmployee = mockUserListener.userRemovedRequestList[0];
        expect(recordedRemovedEmployee.id).toBe(id1);
        expect(recordedRemovedEmployee.firstName).toBe(name1);
    });
});
