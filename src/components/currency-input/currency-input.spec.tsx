import { newSpecPage } from '@stencil/core/testing';
import { CurrencyInput } from './currency-input';

describe('currency-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CurrencyInput],
      html: `<currency-input name="one"></currency-input>`,
    });
    expect(page.root).toEqualHtml(`
      <currency-input name="one">
      <mock:shadow-root>
        <div>
          <div class="Input">
            <span class="Input-currencySymbol">
              €
            </span>
            <input class="Input-field" value="" placeholder="" type="text">
            <span class="Input-separator">
              ,
            </span>
            <input class="Input-field" value="" type="text">
          </div>
        </div>
        </mock:shadow-root>
        <input data-exposed-input name="one" type="text" value="">
      </currency-input>
    `);
  });

  it('renders with default value', async () => {
    const page = await newSpecPage({
      components: [CurrencyInput],
      html: `<currency-input value="12,22" name="one"></currency-input>`,
    });
    expect(page.root).toEqualHtml(`
      <currency-input name="one" value="12,22">
      <mock:shadow-root>
        <div>
          <div class="Input">
            <span class="Input-currencySymbol">
              €
            </span>
            <input class="Input-field" value="12" placeholder="" type="text">
            <span class="Input-separator">
              ,
            </span>
            <input class="Input-field" type="text" value="22">
          </div>
        </div>
        </mock:shadow-root>
        <input data-exposed-input name="one" type="text" value="12,22">
      </currency-input>
    `);
  });

  it('renders with custom separator.', async () => {
    const page = await newSpecPage({
      components: [CurrencyInput],
      html: `<currency-input separator="+" value="12,22" name="one"></currency-input>`,
    });
    expect(page.root).toEqualHtml(`
      <currency-input separator="+" name="one" value="12,22">
      <mock:shadow-root>
        <div>
          <div class="Input">
            <span class="Input-currencySymbol">
              €
            </span>
            <input class="Input-field" value="12" placeholder="" type="text">
            <span class="Input-separator">
              +
            </span>
            <input class="Input-field" type="text" value="22">
          </div>
        </div>
        </mock:shadow-root>
        <input data-exposed-input name="one" type="text" value="12+22">
      </currency-input>
    `);
  });

  it('renders with custom symbol.', async () => {
    const page = await newSpecPage({
      components: [CurrencyInput],
      html: `<currency-input symbol="$" value="12,22" name="one"></currency-input>`,
    });
    expect(page.root).toEqualHtml(`
      <currency-input symbol="$" name="one" value="12,22">
      <mock:shadow-root>
        <div>
          <div class="Input">
            <span class="Input-currencySymbol">
              $
            </span>
            <input class="Input-field" value="12" placeholder="" type="text">
            <span class="Input-separator">
              ,
            </span>
            <input class="Input-field" type="text" value="22">
          </div>
        </div>
        </mock:shadow-root>
        <input data-exposed-input name="one" type="text" value="12,22">
      </currency-input>
    `);
  });
});
