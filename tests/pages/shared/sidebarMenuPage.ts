import { expect, type Locator, type Page } from '@playwright/test';

export class SidebarMenuPage {
    private readonly page: Page;
    private menuButton: Locator | undefined;

    constructor(page: Page) {
        this.page = page;
    }

    async SelectMenuItem(menuItem: string) {
        this.menuButton = this.page.getByRole('button', { name: menuItem });
        await expect(this.menuButton).toBeVisible();
        await this.menuButton.click();
    }
    async product() {
        await expect(this.page.getByRole('button', { name: 'Product' })).toBeVisible();
        await this.page.getByRole('button', { name: 'Product' }).click();
    }

    async manufacturingPart() {
        await expect(this.page.getByRole('button', { name: 'Manufacturing part' })).toBeVisible();
        await this.page.getByRole('button', { name: 'Manufacturing part' }).click();
    }

    async purchasingPart() {
        await expect(this.page.getByRole('button', { name: 'Purchasing part' })).toBeVisible();
        await this.page.getByRole('button', { name: 'Purchasing part' }).click();
    }
}
