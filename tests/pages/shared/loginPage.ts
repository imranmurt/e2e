import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
    private readonly page: Page;
    private readonly emailInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;
    private readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.getByRole('textbox', { name: 'E-Mail eingeben' });
        this.passwordInput = page.getByRole('textbox', { name: 'Passwort eingeben' });
        this.loginButton = page.getByRole('button', { name: 'Weiter' });
        this.errorMessage = page.getByText('Falsche E-Mail oder falsches');
    }

    async goto(url: string) {
        await this.page.goto(url);
    }

    async loginWithUsernameAndPassword(email: string, password: string) {
        await expect(this.emailInput).toBeVisible();
        await this.emailInput.first().click();
        await this.emailInput.first().fill(email);
        await expect(this.passwordInput).toBeVisible();
        await this.passwordInput.first().click();
        await this.passwordInput.first().fill(password);
        await this.loginButton.click();
    }

    async loginwithinvalidcredentials(email: string, password: string) {
        await expect(this.emailInput).toBeVisible();
        await this.emailInput.first().click();
        await this.emailInput.first().fill(email);
        await expect(this.passwordInput).toBeVisible();
        await this.passwordInput.first().click();
        await this.passwordInput.first().fill(password);
        await this.loginButton.click();
        await expect(this.errorMessage).toBeVisible();
    }
}
