import type { Meta, StoryObj } from "@storybook/react";

import AntDButton from "../components/Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/Button",
  component: AntDButton,
  tags: ["autodocs"],
} as Meta<typeof AntDButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const LargeSubmitBtn: Story = {
  args: {
    size: "large",
    label: "Submit",
    type: "primary",
  },
};

export const SubmitBtn: Story = {
  args: {
    label: "Submit",
    type: "primary",
  },
};

// import type {
//   ComponentMeta,
//   ComponentStory,
//   Meta,
//   StoryObj,
// } from "@storybook/react";

// import AntDButton from "../components/Button";

// // More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
// const meta = {
//   title: "Example/Button",
//   component: AntDButton,
//   tags: ["autodocs"],
// } as ComponentMeta<typeof AntDButton>;

// export default meta;
// type Story = StoryObj<typeof meta>;

// // More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

// export const Large: ComponentStory<typeof AntDButton> = {
//   render: () => <AntDButton size="large" label="Button" type="primary" />,
// };
