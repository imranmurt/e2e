import { TestData } from "../config/test-data";
import { MenuProfilePage } from "../pages/shared/menuProfilePage";
import { LoginPage } from "../pages/shared/loginPage";
import { MaterialsPage } from "../pages/materials/materialsPage";
import { OrderCreation } from "../pages/orders/orderCreation";
import { SidebarMenuPage } from "../pages/shared/sidebarMenuPage";

export type TestPages = {
  testData: TestData;
  loginPage: LoginPage;
  menuProfilePage: MenuProfilePage;
  sidebarMenuPage: SidebarMenuPage;
  orderCreation: OrderCreation;
  materialsPage: MaterialsPage;
};  