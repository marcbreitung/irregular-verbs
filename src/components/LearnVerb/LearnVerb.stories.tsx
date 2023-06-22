import type { Meta, StoryObj } from "@storybook/react";

import LearnVerb from "./LearnVerb";

const meta: Meta<typeof LearnVerb> = {
  component: LearnVerb,
};

export default meta;
type Story = StoryObj<typeof LearnVerb>;

export const Default: Story = {
  render: (args) => <LearnVerb verb={args.verb} dictionaryUrl={args.dictionaryUrl} />,
  args: {
    verb: {
      id: 1,
      infinitive: "be",
      pastSimple: "was",
      pastParticiple: "been",
      wrong: 0,
      correct: 0,
      progress: 0,
    },
    dictionaryUrl: "https://www.spanishdict.com/conjugate/",
  },
};
