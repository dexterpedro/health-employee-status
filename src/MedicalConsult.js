import puppeteer from 'puppeteer';

const go = async (crm) => {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  await page.goto('https://portal.cfm.org.br/busca-medicos/');

  await page.waitForSelector('input[name=crm]');
  await page.type('input[name=crm]', crm);

  await page.waitForSelector('.btnPesquisar').then(async () => {
    await page.evaluate(() => document.querySelector('.btnPesquisar').click());
  });

  await page.waitForSelector('.resultado-item').then(async () => {
    await page.evaluate(() => document.querySelector('.resultado-item .col-md b').remove());
  });

  await page.waitForSelector('.resultado-item').then(async () => {
    await page.evaluate(() => document.querySelector('.resultado-item .col-md span').remove());
  });

  let situation = "";
  await page.waitForSelector('.resultado-item').then(async () => {
    situation = await page.evaluate(() => document.querySelector('.resultado-item .col-md').innerHTML);
  });

  situation = situation.replace(/[^a-zA-Z]+/g, '');

  browser.close();

  return situation == "Regular";
};

export default {
  go: go
};
