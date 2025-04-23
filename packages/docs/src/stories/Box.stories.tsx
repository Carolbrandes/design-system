import { Box, BoxProps } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

// config global
export default {
    title: 'Surfaces/Box',
    component: Box,

    args: {
        children: (
            <>
                <span>Testando o elemento box</span>
            </>
        )
    }
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}

