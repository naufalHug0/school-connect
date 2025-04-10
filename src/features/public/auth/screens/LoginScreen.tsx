import React, { useEffect, useState } from "react"
import { Button, Text, View } from "react-native-ui-lib"
import {Image} from "react-native"
import tailwind from "twrnc"
import LAYOUT from "../../../../constant/Layout"
import { PoppinsFont, ThemeColors } from "../../../../config/Theme"
import SCTextField from "../../../../components/SCTextField"

const LoginScreen = () => {
    return (
        <View style={tailwind`bg-[#373662] justify-center items-center`} flex>
            <View style={[tailwind`justify-center items-center py-10`,{ width: LAYOUT.screenWidth * 80 / 100 }]} flex>
                <Image
                source={require("../../../../assets/images/logo-school-connect.png")}
                style={{
                    width: '80%',
                    resizeMode: 'contain',
                    height: undefined,
                    aspectRatio: 1,
                    marginVertical: 30
                }}
                />

                <SCTextField
                label="Username atau NIS"
                onChangeText={() => {}}
                />

                <SCTextField
                label="Password"
                isPassword={true}
                onChangeText={() => {}}
                containerStyle={"mt-5"}
                />

                <View flex />

                <Button
                style={[tailwind`py-4 rounded-2xl`, {
                    backgroundColor: ThemeColors.purple,
                    width: '100%',
                }]}
                >
                    <Text
                    style={{ fontFamily: PoppinsFont.medium, color: 'white', fontSize: 16 }}
                    >
                        Masuk
                    </Text>
                </Button>
            </View>
        </View>
    )
}

export default LoginScreen
