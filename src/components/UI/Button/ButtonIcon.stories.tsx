import type { Meta, StoryObj } from "@storybook/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons";

import ButtonIcon from "./ButtonIcon";

const meta: Meta<typeof ButtonIcon> = {
  component: ButtonIcon,
};

export default meta;
type Story = StoryObj<typeof ButtonIcon>;

export const Default: Story = {
  render: (args) => (
    <ButtonIcon>
      <FontAwesomeIcon icon={faArrowAltCircleDown} />
    </ButtonIcon>
  ),
};
