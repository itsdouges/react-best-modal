import { configure } from '@storybook/react';

const req = require.context('../stories', true, /.stories\.tsx$/);

configure(() => req.keys().forEach(req), module);
