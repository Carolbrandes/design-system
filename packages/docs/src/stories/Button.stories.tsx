import { Button, ButtonProps } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'
import { ArrowArcRight } from 'phosphor-react'

// config global
export default {
    title: 'Form/Button',
    component: Button,
    args: {
        children: 'Send'
    },
    argTypes: {
        onClick: {
            action: 'click'
        }
    }
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
    args: {
        variant: 'secondary',
        children: 'Create new'
    }
}

export const Tertiary: StoryObj<ButtonProps> = {
    args: {
        variant: 'tertiary',
        children: 'Cancel'
    }
}

export const Small: StoryObj<ButtonProps> = {
    args: {
        size: 'sm'
    }
}

export const WithIcon: StoryObj<ButtonProps> = {
    args: {
        children: (
            <>
                Proximo passo
                <ArrowArcRight weight='bold' />
            </>
        )
    }
}

export const Disabled: StoryObj<ButtonProps> = {
    args: {
        disabled: true
    }
}





