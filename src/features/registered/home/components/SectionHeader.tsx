import React from 'react'
import { Text, View } from 'react-native-ui-lib'
import { PoppinsFont, ThemeColors } from '../../../../config/Theme'
import tailwind from 'twrnc'

interface SectionHeaderProp {
    text: string,
    src: string,
    style?: any | null
}

const SectionHeader = (
    { text, src, style = null }: SectionHeaderProp
) => {
    return (
        <View style={[tailwind`flex-row px-5 py-4 gap-3 items-center bg-[#2E2D52] rounded-md`, style]}>
            <Text
            style={{ fontFamily: PoppinsFont.bold, color: ThemeColors['purple-200'], fontSize: 20 }}
            >
                {text}
            </Text>
        </View>
    )
}

export default SectionHeader
