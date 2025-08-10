import { Dimensions, ScaledSize } from 'react-native'

export interface Layout {
    screenWidth: number
    screenHeight: number
}

let layout: Layout = getLayout()

function getLayout(): Layout {
    const { width, height } = Dimensions.get('window')
    return { screenWidth: width, screenHeight: height }
    }

Dimensions.addEventListener('change', ({ window }: { window: ScaledSize }) => {
    layout = {
        screenWidth: window.width,
        screenHeight: window.height,
}
})

export const getLayoutInfo = (): Layout => layout
