import type { Meta, StoryObj } from "@storybook/react";

import HomeRoute from "./HomeRoute";

const meta: Meta<typeof HomeRoute> = {
  component: HomeRoute,
};

export default meta;
type Story = StoryObj<typeof HomeRoute>;

export const Default: Story = {
  render: (args) => <HomeRoute />,
};
