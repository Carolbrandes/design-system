import { Box, BoxProps, Text } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

// config global
export default {
    title: 'Surfaces/Box',
    component: Box,

    args: {
        children: (
            <>
                <Text>Testando o elemento box</Text>
            </>
        )
    }
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}

