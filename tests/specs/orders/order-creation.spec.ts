import { test } from '../../fixtures/test-fixtures';

test('order creation', async ({
  loginPage,
  menuProfilePage,
  sidebarMenuPage,
  orderCreation,
  materialsPage,
  testData,
}) => {
  await loginPage.goto(testData.appUrl);
  await loginPage.loginWithUsernameAndPassword(testData.username, testData.password);
  await menuProfilePage.clickProfileButton();
  await menuProfilePage.clickEnglishLanguageButton();
  await menuProfilePage.closeProfileMenu();
  await sidebarMenuPage.SelectMenuItem('Orders');

  await orderCreation.createNewOrder();
  await orderCreation.selectCompany();
  await orderCreation.addPosition();
  await orderCreation.startProduction();

  await sidebarMenuPage.SelectMenuItem('Materials');

});
