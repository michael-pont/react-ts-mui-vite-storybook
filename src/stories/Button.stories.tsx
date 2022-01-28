import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from '@mui/material';

export default {
  title: 'Example/Button',
  component: Button,
} as Meta;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>Button</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'contained',
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'contained',
  color: 'secondary',
};
