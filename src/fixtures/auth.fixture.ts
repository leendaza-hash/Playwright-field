import {test as base} from '@playwright/test';

type MyFixtures = {
  login: (username: string, password: string) => Promise<void>;
};

