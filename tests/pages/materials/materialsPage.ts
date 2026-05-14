import { expect, type Locator, type Page } from '@playwright/test';

export class MaterialsPage {
    readonly page: Page;
    readonly productButton: Locator;
    readonly manufacturingPartButton: Locator;
    readonly purchasingPartButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productButton = page.getByRole('button', { name: 'Product' });
        this.manufacturingPartButton = page.getByRole('button', { name: 'Manufacturing part' });
        this.purchasingPartButton = page.getByRole('button', { name: 'Purchasing part' });
    }

    async clickProductButton() {
        await expect(this.productButton).toBeVisible();
        await this.productButton.click();
    }

    async clickManufacturingPartButton() {
        await expect(this.manufacturingPartButton).toBeVisible();
        await this.manufacturingPartButton.click();
    }

    async clickPurchasingPartButton() {
        await expect(this.purchasingPartButton).toBeVisible();
        await this.purchasingPartButton.click();
    }
}
