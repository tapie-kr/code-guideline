import { RuleTester } from 'eslint';
import removeReactFragment from '../plugins/remove-react-fragment.mjs';

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
});

ruleTester.run('remove-react-fragment', removeReactFragment.rules['remove-react-fragment'], {
  valid: [`<div>Hello</div>`, `<><div>One</div><div>Two</div></>`],
  invalid: [
    {
      code: `<><div>Hello</div></>`,
      output: `<div>Hello</div>`,
      errors: [{ message: 'Unnecessary React Fragment detected. Remove it.' }],
    },
  ],
});
