const getHiddenInput = (container: HTMLInputElement, onInvalid) => {
  let input = container.querySelector("[data-exposed-input]") as HTMLInputElement | null;

  if(!input) {
      input = container.ownerDocument.createElement("input");
      input.type = "text";
      input.setAttribute('data-exposed-input', "");
      container.appendChild(input);
      input.addEventListener('invalid', onInvalid);
      input.addEventListener('input', onInvalid);
  }

  return input;
}

export {
  getHiddenInput
}
