import { test as base, expect } from '@playwright/test';
import type { TestPages } from './test-pages';
import { testData } from '../config/test-data';
import { LoginPage } from '../pages/shared/loginPage';
import { MenuProfilePage } from '../pages/shared/menuProfilePage';
import { SidebarMenuPage } from '../pages/shared/sidebarMenuPage';
import { OrderCreation } from '../pages/orders/orderCreation';
import { MaterialsPage } from '../pages/materials/materialsPage';


export const test = base.extend<TestPages>({
  testData: async ({}, use) => {
    await use(testData);
  },

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  menuProfilePage: async ({ page }, use) => {
    await use(new MenuProfilePage(page));
  },

  sidebarMenuPage: async ({ page }, use) => {
    await use(new SidebarMenuPage(page));
  },

  orderCreation: async ({ page }, use) => {
    await use(new OrderCreation(page));
  },

  materialsPage: async ({ page }, use) => {
    await use(new MaterialsPage(page));
  },
});

export { expect };
