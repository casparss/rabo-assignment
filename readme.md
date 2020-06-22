# Rabo assesssment Caspar Sambrook-Smith

Hello Rabo :) Here's my assessment submission with a few thoughts.

- I've created a page with all the different component states
- I've implmented the basic attributes: disabled, value, name, placeholder, required etc.
- Also implemented some custom atributes: `symbol` (currency symbol) and `separator` for changing the separator between the inputs
- I've added some basic styling, nothing pretty, but shows the different UI states. Have used SuitCSS convetion.

It was fun developing with Stencil (this is the first time actually using it). A lot of it was super easy to use but I still made mistakes and figuring out some things took time, so i wasn't as fast as i would've liked. The test isn't perfect - with more time I could deliver more (spent probably 1 day on it), but i think i've covered the most important aspects.

## If I had more time:
- Would've implemented standard events API for an input element: change, input, keyup, keydown etc.
- Supported more standard input attributes, where possible
- Thought about accessibility. I hardly focused on this
- Written full coverage of tests, just covered some very basic behaviour
- Document the API. It's self explanatory, but still could do with a bit of context
- I would have usually used Storybook to build components like this and then do visual story tests for all the component states. Could've used it but I decided too late in to the assessment and didn't want to burn any more time

## Caveats
- I just added everything to a repo at the end, so unfortunately no nice commit history - in a normal working environment i would commit and message properly.
- I would normally cover all component states with tests, but I battled with what i assume is the limitations of, or even a lack of in my knowledge of JS DOM used with Stencil. When running the e2e tests I was getting TypeErrors where there were missing methods from dom objects, like the input HTMLElement didn't have setCustomValidation method. This meant that the validation behaviour isn't covered with a test! Probably would've solved it with more time :)
- Stencil build environment / hot module reload, seems a bit flakey to me. Sometimes I would get tons of type errors after changing something arbitrary like CSS and then after rstarting all the errors would dissapear and i couldn't reproduce them. Same thing happened with the test runner on watch mode.

