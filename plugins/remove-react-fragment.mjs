/**
 * @type {import('eslint').Rule.RuleModule}
 */
const rule = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Remove unnecessary React fragments',
      category: 'Best Practices',
      recommended: true,
    },
    fixable: 'code',
    schema: [],
  },
  create(context) {
    return {
      JSXFragment(node) {
        if (node.parent.type === 'JSXElement' || node.parent.type === 'JSXFragment') {
          return;
        }

        if (node.children.length === 1 && node.children[0].type === 'JSXElement') {
          context.report({
            node,
            message: 'Unnecessary React Fragment detected. Remove it.',
            fix(fixer) {
              const sourceCode = context.sourceCode;
              const innerCode = sourceCode.getText(node.children[0]);

              return fixer.replaceText(node, innerCode);
            },
          });
        }
      },
    };
  },
};

/**
 * @type {import('eslint').ESLintPlugin}
 */
const plugin = {
  rules: {
    'remove-react-fragment': rule,
  },
};

export default plugin;
