import type { Meta, StoryObj } from "@storybook/react";

import ProgressTable from "./ProgressTable";

const meta: Meta<typeof ProgressTable> = {
  component: ProgressTable,
};

export default meta;
type Story = StoryObj<typeof ProgressTable>;

export const Default: Story = {
  render: (args) => <ProgressTable progress={args.progress} dictionaryUrl={args.dictionaryUrl} />,
  args: {
    dictionaryUrl: "https://www.merriam-webster.com/dictionary/",
    progress: [
      {
        id: 1,
        infinitive: "be",
        pastSimple: "was",
        pastParticiple: "been",
        wrong: 0,
        correct: 0,
        progress: 0,
      },
      {
        id: 2,
        infinitive: "beat",
        pastSimple: "beat",
        pastParticiple: "beaten",
        wrong: 0,
        correct: 0,
        progress: 0,
      },
      {
        id: 3,
        infinitive: "become",
        pastSimple: "became",
        pastParticiple: "become",
        wrong: 0,
        correct: 0,
        progress: 0,
      },
    ],
  },
};
