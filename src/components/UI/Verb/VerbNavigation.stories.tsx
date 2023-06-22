import type { Meta, StoryObj } from "@storybook/react";

import VerbNavigation from "./VerbNavigation";

const meta: Meta<typeof VerbNavigation> = {
  component: VerbNavigation,
};

export default meta;
type Story = StoryObj<typeof VerbNavigation>;

export const Default: Story = {
  render: (args) => <VerbNavigation verb={args.verb} dictionaryUrl={args.dictionaryUrl} />,
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
