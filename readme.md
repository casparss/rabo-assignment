# Rabo assesssment Caspar Sambrook-Smith

Hello Rabo :) Here's my assessment submission with a few thoughts.

- Styling is using SuitCSS convetion
- I've implmented the basic attributes: disabled, value, name, placeholder, required etc.

## Have i had more time:
- Would've implemented standard events API for an input element: change, input, keyup, keydown etc.
- Supported more standard input attributes, where possible
- Thought about accessibility. I hardly focused on this
- Written full coverage of tests, just convered some very basic behaviour
- Spent a lot of time learning Stencil and making mistakes

## Caveats
- I would normally cover all component states with tests, but I battled with what i assume is the limitations of, or even a lack of in my knowledge of JS DOM used with Stencil. When running the e2e tests I was getting TypeErrors where there missing methods from dom objects like the input HTMLElement didn't have setCustomValidation method. This meant that the validation behaviour isn't covered with a test! Probably would've solved it with more time :)
- Stencil build environment / hot module reload, seems a bit flakey to me. Sometimes I would get tons of type errors after changing something arbitrary like styling and then after rstarting all the errors would dissapear and i couldn't reproduce them. Same thing happened with the test runner on watch mode.
