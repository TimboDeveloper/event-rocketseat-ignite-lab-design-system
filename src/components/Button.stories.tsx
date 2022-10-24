import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from './Button'

type Component = StoryObj<ButtonProps>

export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Create account',
    },
    argTypes: {
        asChild: {
            table: {
                disable: true
            }
        }
    }
} as Meta<ButtonProps>

export const Default: Component = {}
