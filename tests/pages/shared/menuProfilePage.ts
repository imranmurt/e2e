import { expect, type Locator, type Page } from '@playwright/test';

export class MenuProfilePage {
    readonly page: Page;
    readonly profileButton: Locator;
    readonly englishLanguagebutton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.profileButton = page.getByRole('button', { name: 'altName Profil 👋 Imran' });
        this.englishLanguagebutton = page.getByRole('button', { name: 'EN' });
    }

    async clickProfileButton() {
        await expect(this.profileButton).toBeVisible();
        await this.profileButton.click();
    }

    async clickEnglishLanguageButton() {
        await expect(this.englishLanguagebutton).toBeVisible();
        await this.englishLanguagebutton.click();
    }

    async closeProfileMenu() {
        await this.page.keyboard.press('Escape');
    }
}
