import type { Meta, StoryObj } from "@storybook/react";

import VerbOptions from "./VerbOptions";

const meta: Meta<typeof VerbOptions> = {
  component: VerbOptions,
};

export default meta;
type Story = StoryObj<typeof VerbOptions>;

export const Default: Story = {
  render: (args) => <VerbOptions option={args.option} onChangeOption={args.onChangeOption} />,
  args: {
    option: "show",
    onChangeOption: () => {},
  },
};
