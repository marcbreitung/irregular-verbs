import type { Meta, StoryObj } from "@storybook/react";

import VerbInfo from "./VerbInfo";

const meta: Meta<typeof VerbInfo> = {
  component: VerbInfo,
};

export default meta;
type Story = StoryObj<typeof VerbInfo>;

export const Default: Story = {
  render: (args) => <VerbInfo verb={args.verb} dictionaryUrl={args.dictionaryUrl} />,
  args: {
    verb: "be",
    dictionaryUrl: "https://www.merriam-webster.com/dictionary/be",
  },
};
