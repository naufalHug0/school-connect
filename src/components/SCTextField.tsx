import React from 'react'
import { Text, View } from 'react-native-ui-lib'
import tailwind from 'twrnc'
import { PoppinsFont } from '../config/Theme'
import { TextInput } from 'react-native'

interface SCTextFieldProp {
    onChangeText: (value: string) => any,
    containerStyle?: string | null,
    label: string,
    isPassword?: boolean
}

const SCTextField = (
    { onChangeText, containerStyle = null, label, isPassword = false }: SCTextFieldProp
) => {
    return (
        <View style={tailwind`w-full ${containerStyle || ''}`}>
        {
            <Text style={{ 
                fontFamily: PoppinsFont.light,
                letterSpacing: 0.5,
                fontSize: 12,
                color: "rgba(255,255,255,0.5)"
            }}>
                {label}
            </Text>
        }
        <View
        style={tailwind`bg-[#2E2D52] p-3 w-full rounded-lg mt-1`}
        >
            <TextInput
            secureTextEntry={isPassword}
            onChangeText={value => onChangeText(value)}
            style={tailwind`w-full`}
        />
        </View>
        </View>
    )
}

export default SCTextField
