import React, { useEffect, useState } from "react"
import { ScrollView } from "react-native"
import { Image, View } from "react-native-ui-lib"
import tailwind from "twrnc"
import SectionHeader from "../components/SectionHeader"

const HomeScreen = () => {
    return (
        <View style={tailwind`bg-[#2A2A4C] justify-center items-center`} flex>
            <View style={tailwind`flex-row flex-1 w-full px-5 justify-between items-center mt-16 mb-10`}>
                <Image
                    source={require("../../../../assets/images/icon-settings.png")}
                    style={{
                        width: 45,
                        resizeMode: 'contain',
                        height: undefined,
                        aspectRatio: 1
                    }}
                    />
                <Image
                    source={require("../../../../assets/images/icon-logout.png")}
                    style={{
                        width: 45,
                        resizeMode: 'contain',
                        height: undefined,
                        aspectRatio: 1
                    }}
                    />
            </View>

            <ScrollView style={tailwind`w-full h-full bg-[#373662] rounded-t-[60px] overflow-visible`}>
                <View flex style={tailwind`w-full justify-center items-center`}>
                    <Image
                    source={require("../../../../assets/images/img-profile-picture.jpeg")}
                    style={[
                        {
                            width: 100,
                            resizeMode: 'cover',
                            height: undefined,
                            aspectRatio: 1
                        },
                        tailwind`border-[5.5px] border-white rounded-full`
                    ]}
                    />
                </View>

                <SectionHeader
                text="Ujian Berlangsung"
                src=""
                style={tailwind`mt-20`}
                />
            </ScrollView>
        </View>
    )
}

export default HomeScreen
