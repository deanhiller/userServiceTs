import {UserService} from "../src/api/userService";
import {UserServiceFactoryImpl} from "../src/impl/userServiceFactoryImpl";
import {UserServiceFactory} from "../src/api/userServiceFactory";

describe('UserService Tests', () => {
    let userSvc: UserService | undefined;
    const id1 = 4;
    const id2 = 5;
    const name1 = 'dean';

    beforeEach(() => {
        const factory = UserServiceFactory.createFactory(undefined, new UserServiceFactoryImpl());
        userSvc = factory.createService();
    });

    test('should add users correctly', () => {
        if(!userSvc) {
            throw new Error('User service should exist here');
        }
        const name2 = 'Yun';

        const employee = userSvc.createUser(id1, name1, 'hiller');
        expect(employee.id).toBe(id1);
        expect(employee.firstName).toBe(name1);

        userSvc.createUser(id2, name2, 'Xu');

        const employeeRes = userSvc.getUser(id1);
        if (!employeeRes) {
            throw new Error(`User with id ${id1} should exist`);
        }
        expect(employeeRes.id).toBe(id1);
        expect(employeeRes.firstName).toBe(name1);

        const employeeRes2 = userSvc.getUser(id2);
        if (!employeeRes2) {
            throw new Error(`User with id ${id2} should exist`);
        }
        expect(employeeRes2.id).toBe(id2);
        expect(employeeRes2.firstName).toBe(name2);
    });

    test('should remove users correctly', () => {
        if(!userSvc) {
            throw new Error('User service should exist here');
        }

        // Set up initial state by adding users
        const name2 = 'Yun';

        userSvc.createUser(id1, name1, 'hiller');
        userSvc.createUser(id2, name2, 'Xu');

        const employee = userSvc.removeUser(id1);
        if (!employee) {
            throw new Error(`User with id ${id1} should exist`);
        }
        expect(employee.id).toBe(id1);
        expect(employee.firstName).toBe(name1);

        const user = userSvc.getUser(id1);
        expect(user).toBeNull();
    });
});;


