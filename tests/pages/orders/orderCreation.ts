import { expect, type Locator, type Page } from '@playwright/test';

export class OrderCreation {
    readonly page: Page;
    readonly orderButton: Locator;
    readonly createNewOrderButton: Locator;
    readonly selectNameInput: Locator;
    readonly companyTestOption: Locator;
    readonly addPositionButton: Locator;
    readonly firstPositionCheckbox: Locator;
    readonly addButton: Locator;
    readonly productionStartButton: Locator;
    readonly orderedStatusButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.orderButton = page.getByRole('button', { name: 'Orders' });
        this.createNewOrderButton = page.getByRole('button', { name: 'Create New Order' });
        this.selectNameInput = page.getByRole('textbox', { name: 'Select name' });
        this.companyTestOption = page.getByRole('button', { name: 'companytest' });
        this.addPositionButton = page.getByRole('button', { name: 'Add position' });
        this.firstPositionCheckbox = page.locator('tr:nth-child(2) > td > div > .MuiBox-root > .css-1mkf6ac-checkboxContainer > .css-1m4m28l-checkboxLabel > .css-pvvarl-checkmark');
        this.addButton = page.getByRole('button', { name: 'Add' });
        this.productionStartButton = page.getByRole('button', { name: 'Production start' });
        this.orderedStatusButton = page.getByRole('button', { name: 'Ordered' });
    }

    async createNewOrder() {
        await expect(this.createNewOrderButton).toBeVisible();
        await this.createNewOrderButton.click();
    }

    async selectCompany() {
        await expect(this.selectNameInput).toBeVisible();
        await this.page.getByRole('button').filter({ hasText: /^$/ }).click();
        await expect(this.companyTestOption).toBeVisible();
        await this.companyTestOption.click();
    }

    async addPosition() {
        await expect(this.addPositionButton).toBeVisible();
        await this.addPositionButton.click();
        await expect(this.firstPositionCheckbox).toBeVisible();
        await this.firstPositionCheckbox.click();
        await expect(this.addButton).toBeVisible();
        await this.addButton.click();
    }

    async startProduction() {
        await expect(this.productionStartButton).toBeVisible();
        await this.productionStartButton.click();
        await expect(this.orderedStatusButton).toBeVisible();
    }
}
