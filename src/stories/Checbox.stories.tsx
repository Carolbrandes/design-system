import { Box, Checkbox, CheckboxProps, Text } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

// config global
export default {
    title: 'Form/Checkbox',
    component: Checkbox,
    args: {

    },
    decorators: [
        (Story) => <Box as="label" css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}>
            {Story()}
            <Text size="sm">Accept terms of use</Text>
        </Box> // the input will render inside box
    ]
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {

}





