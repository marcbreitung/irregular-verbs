import type { Meta, StoryObj } from "@storybook/react";
import { faAddressBook } from "@fortawesome/free-regular-svg-icons";

import Teaser from "./Teaser";

const meta: Meta<typeof Teaser> = {
  component: Teaser,
};

export default meta;
type Story = StoryObj<typeof Teaser>;

export const Default: Story = {
  render: (args) => <Teaser title={args.title} icon={args.icon} link={args.link} />,
  args: {
    title: "Teaser",
    icon: faAddressBook,
    link: "/",
  },
};
