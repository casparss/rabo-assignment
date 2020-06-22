import { newE2EPage } from '@stencil/core/testing';

describe('currency-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<currency-input name="one"></currency-input>');

    const element = await page.find('currency-input');
    expect(element).toHaveClass('hydrated');
  });

  it('sets disabled attr correctly', async () => {
    const page = await newE2EPage();
    await page.setContent('<div><currency-input disabled name="one"></currency-input></div>');

    const disabledEl = await page.find('currency-input >>> .Input--disabled');
    expect(disabledEl).toHaveClass('Input--disabled');
  });

  it('sets placeholder correctly', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <div><currency-input placeholder="123,12" name="one"></currency-input></div>
    `);

    const disabledEl = await page.find('currency-input >>> .Input-field');
    expect(disabledEl).toHaveAttribute('placeholder');
  });
});
