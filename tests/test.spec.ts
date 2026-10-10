import {test, expect} from '@playwright/test';

test('login com credenciais válidas', async ({ page }) => {
    //vá para a página
    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('standard_user');

    await page.getByPlaceholder('Password').fill('secret_sauce');

    //pegamos o elemento com o role de button cujo name é Login e clicamos nele
    await page.getByRole('button', { name: 'Login'}).click();

    //verificamos se o login foi válido com base na URL que é carregada após o login
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('login com credenciais inválidas', async ({ page }) => {
    //vá para a página
    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('standard_use');

    await page.getByPlaceholder('Password').fill('secret_sauc');

    //pegamos o elemento com o role de button cujo name é Login e clicamos nele
    await page.getByRole('button', { name: 'Login'}).click();

    //verificamos se o login foi inválido com base na URL que é carregada após o login. 
    await expect(page).toHaveURL('https://www.saucedemo.com/');
});