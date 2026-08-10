import {test as base} from '@playwright/test';


//To create a new test with custom fixtures, we can use the base test and extend it with our own fixtures. In this case, we are creating a fixture for login functionality.
type MyFixtures = {
  login: (username: string, password: string) => Promise<void>;
};

