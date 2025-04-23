import { Text, TextProps } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

// config global
export default {
    title: 'Typography/Text',
    component: Text,
    args: {
        children: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi aliquid similique sit numquam aspernatur animi eligendi vel saepe. Sed fugiat voluptatum quibusdam quam hic, consequatur magnam repellat cumque inventore aliquam?'
    }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: 'Strong text',
        as: 'strong'
    }
}

