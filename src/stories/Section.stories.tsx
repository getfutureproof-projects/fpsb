import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Section, SectionProps } from '../components/Section';
import { colors, FPColorString } from '../styles/theme';

const meta: Meta = {
    title: 'Components/Section',
    component: Section
}

export default meta;

const Template: Story<SectionProps> = (args) => <Section {...args} />;

export const Default = Template.bind({});
export const Vertical = Template.bind({});
export const Horizontal = Template.bind({});
Vertical.args = {
    direction: 'ttb',
    justifyContent: 'space-around'
}
Horizontal.args = {
    direction: 'ltr',
    justifyContent: 'space-between'
}

export const Colorways = () => {
    const colorOpts = Object.keys(colors).filter(c => c !== 'white' && c!=='purple').map(c => c as FPColorString);

    return (
        <>
        <div id="default">
            <h2>Backgrounds</h2>
            { colorOpts.map((c, i) => <Section key={i} border bgColor={c} />) }
        </div>
        </>
    )
};

