module.exports = {
  '*.js': ['yarn prettier --single-quote --write', 'yarn lint', 'git add'],
  '*.{json,md,yml}': ['yarn prettier --write', 'git add']
};
