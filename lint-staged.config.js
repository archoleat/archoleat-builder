export default {
  '**/*': 'prettier --write',
  'src/js/**/*.js': 'eslint --fix',
  'src/scss/**/*.scss': 'stylelint --fix',
};
