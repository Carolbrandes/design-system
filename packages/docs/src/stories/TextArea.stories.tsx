import { Box, TextArea, TextAreaProps } from '@carol23-ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

// config global
export default {
    title: 'Form/TextArea',
    component: TextArea,
    args: {

    },
    decorators: [
        (Story) => <Box as="label" css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
            <TextArea size="sm">Observations</TextArea>
            {Story()}
        </Box> // the input will render inside box
    ]
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
    args: {
        placeholder: "Add any observations..."
    }
}

export const Disabled: StoryObj<TextAreaProps> = {
    args: {
        disabled: true
    }
}





