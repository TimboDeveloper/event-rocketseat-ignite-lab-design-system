import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from './Heading'

type Component = StoryObj<HeadingProps>

export default {
    title: 'Components/Heading',
    component: Heading,
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
        },
        asChild: {
            table: {
                disable: true
            }
        }
    }
} as Meta<HeadingProps>

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
            <h1>Heading with H1 tag</h1>
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
