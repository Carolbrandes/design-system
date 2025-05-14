import { Box, MultiStep, MultiStepProps } from '@carol23-ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

// config global
export default {
    title: 'Form/MultiStep',
    component: MultiStep,
    args: {
        size: 4,
        currentStep: 1
    },
    decorators: [
        (Story) => <Box as="label" css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
            {Story()}
        </Box> // the input will render inside box
    ]
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {

}

export const Full: StoryObj<MultiStepProps> = {
    args: {
        currentStep: 4,
    }
}





