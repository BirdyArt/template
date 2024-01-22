import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
  args: {
    label: "Button",
  },
};

export const SmallMobile: Story = {
  parameters: { viewport: { defaultViewport: "mobile1" } },
  args: {
    label: "Button",
  },
};

export const LargeMobile: Story = {
  parameters: { viewport: { defaultViewport: "mobile2" } },
  args: {
    label: "Button",
  },
};

export const Tablet: Story = {
  parameters: { viewport: { defaultViewport: "tablet" } },
  args: {
    label: "Button",
  },
};
