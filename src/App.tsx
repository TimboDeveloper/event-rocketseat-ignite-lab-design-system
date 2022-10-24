import React from 'react'
import { Button } from './components/Button'
import { Heading } from './components/Heading'
import { Text } from './components/Text'
import { TextInput } from './components/TextInput'

import './styles/global.css'

export const App: React.FC = () => {
    return (
        <>
            <TextInput value='teste' />

            <Heading>
                Teste
            </Heading>

            <Button>
                Hello World!
            </Button>

            <Text size='sm'>
                Hello World!
            </Text>

        </>
    )
}
