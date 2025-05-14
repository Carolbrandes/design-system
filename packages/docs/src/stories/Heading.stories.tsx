import { Heading, HeadingProps } from '@carol23-ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

// config global
export default {
    title: 'Typography/Heading',
    component: Heading,
    args: {
        children: 'Custom Title',
        size: 'md' // Add default size
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
            control: { type: 'inline-radio' }
        },
        as: {
            control: { type: 'text' } // or 'select' with specific options
        }
    }
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
    args: {
        children: 'H1 Heading',
        as: 'h1',
        size: 'md',
    },
    argTypes: {
        size: {
            options: ["sm", "md", "lg", "2xl", "4xl", "5xl", "6xl"],
            control: {
                type: 'inline-radio'
            }
        },
    },
    parameters: {
        docs: {
            description: {
                story: 'Por padrao o heading sempre sera um `h2`, mas podemos alterar isso com a propriedade `as`.'
            }
        }
    }
}