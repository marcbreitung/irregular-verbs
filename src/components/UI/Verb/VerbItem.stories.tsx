import type { Meta, StoryObj } from "@storybook/react";

import VerbItem from "./VerbItem";
import { ChangeEvent } from "react";

const meta: Meta<typeof VerbItem> = {
  component: VerbItem,
};

export default meta;
type Story = StoryObj<typeof VerbItem>;

export const Default: Story = {
  render: (args) => (
    <VerbItem
      form={args.form}
      verb={args.verb}
      status={args.status}
      highlight={args.highlight}
      onChange={function (event: ChangeEvent<HTMLInputElement>): void {}}
    />
  ),
  args: {
    form: "Infinitive",
    verb: "be",
    status: "default",
    onChange: () => {},
    highlight: false,
  },
};
