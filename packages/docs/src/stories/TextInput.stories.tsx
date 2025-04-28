import { Box, Text, TextInput, TextInputProps } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

// config global
export default {
    title: 'Form/TextInput',
    component: TextInput,
    args: {

    },
    decorators: [
        (Story) => <Box as="label" css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
            <Text size="sm">E-mail address</Text>
            {Story()}
        </Box> // the input will render inside box
    ]
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
    args: {
        placeholder: "Type your name"
    }
}

export const Disabled: StoryObj<TextInputProps> = {
    args: {
        disabled: true
    }
}

export const WithPrefix: StoryObj<TextInputProps> = {
    args: {
        prefix: 'cal.com/'
    }
}



