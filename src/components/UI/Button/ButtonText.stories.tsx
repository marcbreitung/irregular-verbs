import type { Meta, StoryObj } from "@storybook/react";

import ButtonText from "./ButtonText";

const meta: Meta<typeof ButtonText> = {
  component: ButtonText,
};

export default meta;
type Story = StoryObj<typeof ButtonText>;

export const Default: Story = {
  render: (args) => <ButtonText layout={args.layout}>Learn</ButtonText>,
  args: {
    layout: "primary",
  },
};
