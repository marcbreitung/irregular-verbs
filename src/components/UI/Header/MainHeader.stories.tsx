import type { Meta, StoryObj } from "@storybook/react";

import MainHeader from "./MainHeader";

const meta: Meta<typeof MainHeader> = {
  component: MainHeader,
};

export default meta;
type Story = StoryObj<typeof MainHeader>;

export const Default: Story = {
  render: (args) => <MainHeader title={args.title} onSettingsClick={args.onSettingsClick} />,
  args: {
    title: "Irregular Verbs Trainer",
    onSettingsClick: () => {},
  },
};
