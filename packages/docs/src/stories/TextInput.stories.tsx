import { Box, Text, TextInput, TextInputProps } from '@carol23-ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

// config global
export default {
    title: 'Form/TextInput',
    component: TextInput,
    args: {
        placeholder: 'Type something...', // Add default placeholder
        disabled: false // Add default disabled state
    },
    argTypes: {
        disabled: {
            control: { type: 'boolean' }
        }
    },
    decorators: [
        (Story) => (
            <Box as="label" css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
                <Text size="sm">Email address</Text>
                {Story()}
            </Box>
        )
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
        prefix: 'cal.com/',
        placeholder: 'your-username'
    }
}



