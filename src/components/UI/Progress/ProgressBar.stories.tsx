import type { Meta, StoryObj } from "@storybook/react";

import ProgressBar from "./ProgressBar";

const meta: Meta<typeof ProgressBar> = {
  component: ProgressBar,
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  render: (args) => <ProgressBar value={args.value} />,
  args: {
    value: 50,
  },
};
