import type { Meta, StoryObj } from "@storybook/react";

import LearnProgress from "./LearnProgress";

const meta: Meta<typeof LearnProgress> = {
  component: LearnProgress,
};

export default meta;
type Story = StoryObj<typeof LearnProgress>;

export const Default: Story = {
  render: (args) => <LearnProgress verbs={args.verbs} dictionaryUrl={args.dictionaryUrl} />,
  args: {
    verbs: [],
    dictionaryUrl: "https://www.spanishdict.com/conjugate/",
  },
};
