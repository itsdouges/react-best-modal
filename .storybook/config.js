import { configure, addDecorator } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';

setDefaults({
  inline: true,
});

const req = require.context('../stories', true, /.stories\.tsx$/);

configure(() => req.keys().forEach(req), module);
