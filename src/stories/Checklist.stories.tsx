import React from "react";
import { Meta, Story } from '@storybook/react';
import { Checklist, ChecklistItem, ChecklistItemProps } from "../components/Checklist";

const meta: Meta = {
  title: "Components/Lists/Checklist",
  component: ChecklistItem
};

export default meta

const Template: Story<ChecklistItemProps> = (args) => <ChecklistItem {...args} />;

export const Item = Template.bind({});
Item.args = {
  label: 'We do this'
}

export const List = () => (
  <Checklist>
    <ChecklistItem label='We do this' />
    <ChecklistItem label='We also do this' />
    <ChecklistItem label='We even do this' />
  </Checklist>
)
