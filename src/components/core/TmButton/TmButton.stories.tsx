import type {Meta, StoryObj} from '@storybook/react'

import TmButton from './TmButton' 





const meta : Meta<typeof TmButton> = {
    component :  TmButton, 
    title : 'TmButton',
    argTypes :{
        color : {
            control : {type : 'select'},
            options : ['black', 'white']
        }
    }
}
export default meta ;


type Story = StoryObj<typeof meta> ;


export const Default : Story ={
    args :{
        variant : 'blue',
        label : 'green',
        color : 'white'
    }
}

export const Yellow : Story ={
    args : {
        variant : 'yellow',
        label : 'Yellow',
        color : 'black'
    }
} 
export const Red : Story ={
    args : {
        variant : 'red',
        label : 'Red',
        color : 'black'
    }
} 