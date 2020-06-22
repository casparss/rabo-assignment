import { Component, Prop, Element, State, ComponentInterface, h } from '@stencil/core';
import { getHiddenInput } from '../../utils/dom';
import { isEmpty, notEmpty, isNumberString } from '../../utils/validations';

enum ValidationMessages {
  REQUIRED = 'Input field is a required field and must have a value.',
  NUMBERS_ONLY = 'Input should be be numbers only.'
}

@Component({
  tag: 'currency-input',
  styleUrl: 'currency-input.css',
  shadow: true,
})
export class CurrencyInput implements ComponentInterface {
  @Element() el!: HTMLInputElement;

  @Prop() name: string;
  @Prop() value: string;
  @Prop() symbol: string = "€";
  @Prop() separator: string = ",";
  @Prop() disabled: boolean;
  @Prop() required: boolean;
  @Prop() readonly: boolean;
  @Prop() placeholder: string = "";

  @State() field1: string = "";
  @State() field2: string = "";
  @State() isInvalidMessage: string | null;

  componentWillLoad() {
    if(this.value) {
      const [field1, field2] = this.value.split(',');
      this.field1 = field1;
      this.field2 = field2;
    }
  }

  handleInvalid = (e: Event) => {
    e.preventDefault();
    e.stopPropagation();

    // @ts-ignore
    const { validationMessage } = e.target;

    if(validationMessage) {
      this.isInvalidMessage = validationMessage;
    } else {
      this.isInvalidMessage = null;
    }
  }

  handleUpdateField1({ target }): void {
    this.field1 = target.value;
  }

  handleUpdateField2({ target }): void {
    this.field2 = target.value;
  }

  get formattedValue(): string {
    const { field1, field2, separator } = this;

    if(isEmpty(field1) && isEmpty(field1)) {
      return '';
    }

    if(notEmpty(field1) && isEmpty(field2)) {
      return field1;
    }

    if(isEmpty(field1) && notEmpty(field2)) {
      return field2;
    }

    return `${field1}${separator}${field2}`;
  }

  get validationMessage(): string | undefined {
    if(this.required && this.formattedValue === '') {
      return ValidationMessages.REQUIRED;
    }

    if(!isNumberString(this.field1) || !isNumberString(this.field2)) {
      return ValidationMessages.NUMBERS_ONLY;
    }
  }

  get cssStates(): string {
    const classArray: string[] = [];

    if(this.isInvalidMessage) {
      classArray.push('Input--invalid');
    }

    if(this.disabled) {
      classArray.push('Input--disabled');
    }

    return classArray.join(' ');
  }

  get placeholderValue(): string[] {
    return this.placeholder.split(',');
  }

  render() {
    const [placeholder1, placeholder2] = this.placeholderValue;
    this.renderExposedInput();

    return (
      <div class={this.cssStates}>
        <div class="Input">
          <span class="Input-currencySymbol">{this.symbol}</span>

          <input
            class="Input-field"
            type="text"
            onKeyUp={(e) => this.handleUpdateField1(e)}
            value={this.field1}
            readonly={this.readonly}
            disabled={this.disabled}
            placeholder={placeholder1}
          />

          <span class="Input-separator">{this.separator}</span>

          <input
            class="Input-field"
            type="text"
            onKeyUp={(e) => this.handleUpdateField2(e)}
            readonly={this.readonly}
            value={this.field2}
            disabled={this.disabled}
            placeholder={placeholder2}
          />
        </div>

        {this.isInvalidMessage && <p class="Input-validationMessage">{this.isInvalidMessage}</p>}
      </div>
    );
  }

  renderExposedInput(): void {
    const {
      el,
      name,
      formattedValue,
      validationMessage
    } = this;

    let input = getHiddenInput(el, this.handleInvalid);

    if(input.value !== formattedValue) {
      setTimeout(() => {
        const evt = document.createEvent("HTMLEvents");
        evt.initEvent("input", false, true);
        input.dispatchEvent(evt);
      });
    }

    input.name = name;
    input.value = formattedValue;

    if(input.setCustomValidity) {
      input.setCustomValidity(validationMessage ? validationMessage : '');
    }
  }
}
