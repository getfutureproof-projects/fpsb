import React from "react";
import { Meta, Story } from '@storybook/react';
import { NumberedItem, NumberedList, NumItemProps } from "../components/NumberedList";

const meta: Meta = {
  title: "Components/Lists/Numbered List",
  component: NumberedList
};

export default meta

const Template: Story<NumItemProps> = (args) => <NumberedItem {...args} />;


export const Item = Template.bind({});
Item.args = {
    bullet: 1,
    content: 'An item on our list'
}

export const List = () => (
  <NumberedList
    items={[
        'This thing',
        'That thing',
        'The other thing'
    ]} />
)
