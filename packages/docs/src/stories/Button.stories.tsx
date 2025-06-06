import { Button, ButtonProps } from '@carol23-ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'
import { ArrowArcRight } from 'phosphor-react'

// config global
export default {
    title: 'Form/Button',
    component: Button,
    args: {
        children: 'Send',
        variant: 'primary',
        size: 'md',
        disabled: false
    },
    argTypes: {
        variant: {
            options: ['primary', 'secondary', 'tertiary'],
            control: {
                type: 'inline-radio'
            }
        },
        size: {
            options: ['sm', 'md'],
            control: {
                type: 'inline-radio'
            }
        },
        disabled: {
            control: {
                type: 'boolean'
            }
        },
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





