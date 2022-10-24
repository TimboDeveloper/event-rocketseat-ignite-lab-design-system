import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './Text'

type Component = StoryObj<TextProps>

export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, sint.',
        size: 'md'
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<TextProps>

export const Default: Component = {}

export const Small: Component = {
    args: {
        size: 'sm'
    }
}

export const Large: Component = {
    args: {
        size: 'lg'
    }
}

export const Custom: Component = {
    args: {
        asChild: true,
        children: (
            <p>Text with p tag</p>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        },
        asChild: {
            table: {
                disable: true
            }
        }
    }
}
