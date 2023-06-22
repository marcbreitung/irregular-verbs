import type { Meta, StoryObj } from "@storybook/react";

import IntroHeader from "./IntroHeader";

const meta: Meta<typeof IntroHeader> = {
  component: IntroHeader,
};

export default meta;
type Story = StoryObj<typeof IntroHeader>;

export const Default: Story = {
  render: (args) => <IntroHeader title={args.title} onSettingsClick={args.onSettingsClick} />,
  args: {
    title: "Irregular Verbs Trainer",
    onSettingsClick: () => {},
  },
};
