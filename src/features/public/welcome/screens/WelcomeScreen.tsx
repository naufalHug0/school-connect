import React, { useEffect, useState } from "react"
import { Button, Text, View } from "react-native-ui-lib"
import {Image} from "react-native"
import tailwind from "twrnc"
import LAYOUT from "../../../../constant/Layout"
import { PoppinsFont, ThemeColors } from "../../../../config/Theme"

const WelcomeScreen = () => {
    return (
        <View style={tailwind`bg-[#373662] justify-center items-center`} flex>
            <View style={[tailwind`justify-center py-10`,{ width: LAYOUT.screenWidth * 80 / 100 }]} flex>
                <View flex />

                <Image
                source={require("../../../../assets/images/img-welcome.png")}
                style={{
                    width: '100%',
                    resizeMode: 'contain',
                    height: undefined,
                    aspectRatio: 1,
                    marginBottom: 30
                }}
                />

                <Text
                style={{ fontFamily: PoppinsFont.bold, color: 'white', fontSize: 26}}
                >
                    Koneksikan Dirimu
                </Text>

                <Text
                style={{ fontFamily: PoppinsFont.light, color: 'white', fontSize: 14 }}
                >
                    Saling berkoneksi cukup dengan satu sentuhan
                </Text>

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

export default WelcomeScreen
