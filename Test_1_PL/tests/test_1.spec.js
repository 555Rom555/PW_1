// @ts-check

//console.log('Playwright');

// const ghhh = (a, b) => {
//   return a + b;
// };

// console.log(ghhh(3, 6));

import { test, expect } from '@playwright/test';

test('Проверка Отображения Елементов Навигации Хедера', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'Docs' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'API' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Node.js' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Community' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'GitHub repository' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Discord server' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Switch between dark and light' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Search (Ctrl+K)' })).toBeVisible();
});

test('Проверка Названий Елементов Навигации Хедера', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toContainText(
    'Playwright',
  );
  await expect(page.getByRole('link', { name: 'Docs' })).toContainText('Docs');
  await expect(page.getByRole('link', { name: 'API' })).toContainText('API');
  await expect(page.getByRole('button', { name: 'Node.js' })).toContainText('Node.js');
  await expect(page.getByRole('link', { name: 'Community' })).toContainText('Community');
});

test('Проверка аттрибута Href Елементов Навигации Хедера', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toHaveAttribute(
    'href',
    '/',
  );
  '/',
    await expect(page.getByRole('link', { name: 'Docs' })).toHaveAttribute('href', '/docs/intro');
  await expect(page.getByRole('link', { name: 'API' })).toHaveAttribute(
    'href',
    '/docs/api/class-playwright',
  );

  await expect(page.getByRole('link', { name: 'Community' })).toHaveAttribute(
    'href',
    '/community/welcome',
  );
  await expect(page.getByRole('link', { name: 'GitHub repository' })).toHaveAttribute(
    'href',
    'https://github.com/microsoft/playwright',
  );
  await expect(page.getByRole('link', { name: 'Discord server' })).toHaveAttribute(
    'href',
    'https://aka.ms/playwright/discord',
  );
});

test('Проверка Переключения ЛайтМод', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  const beforeTheme = await page.locator('html').getAttribute('data-theme');
  const beforeChoice = await page.locator('html').getAttribute('data-theme-choice');
  console.log('До переключения: theme = ' + beforeTheme + ', choice = ' + beforeChoice);

  await page.getByLabel('Switch between dark and light').click();

  //await page.getByLabel('Switch between dark and light').click();
  const afterTheme = await page.locator('html').getAttribute('data-theme');
  const afterChoice = await page.locator('html').getAttribute('data-theme-choice');

  if (beforeTheme == 'light' && beforeChoice == 'system') {
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  }
  console.log('После переключения 1: theme = ' + afterTheme + ', choice = ' + afterChoice);

  await page.getByLabel('Switch between dark and light').click();

  const afterTheme_1 = await page.locator('html').getAttribute('data-theme');
  const afterChoice_1 = await page.locator('html').getAttribute('data-theme-choice');
  console.log('После переключения 2: theme = ' + afterTheme_1 + ', choice = ' + afterChoice_1);
  //await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
});

test('Проверка Заголовка страницы', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.getByRole('heading', { name: 'Playwright enables reliable' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Playwright enables reliable' })).toContainText(
    'Playwright enables reliable end-to-end testing for modern web apps.',
  );
});

test('Проверка Кнопки GET STARTED', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect.soft(page.getByRole('link', { name: 'Get started' })).toBeVisible();
  await expect.soft(page.getByRole('banner')).toContainText('Get started');
  await expect
    .soft(page.getByRole('link', { name: 'Get started' }))
    .toHaveAttribute('href', '/docs/intro');
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect.soft(page).toHaveURL('https://playwright.dev/docs/intro');
  await expect.soft(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
