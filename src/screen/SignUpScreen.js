import { Box, Text, View } from "@gluestack-ui/themed";
import { Picker } from "@react-native-picker/picker";

import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SignUpScreen = () => {
    const [selectedGender, setSelectedGender] = useState('male');
    return (
        <Box flex={1}>
            <Box alignItems={"center"} marginTop={50} marginBottom={50}>
                <MaterialCommunityIcons
                    marginRight={10}
                    marginBottom={10}
                    name="account"
                    size={100}
                    color='white'
                    backgroundColor='pink'
                    style={{
                        borderRadius: 100000
                    }}
                />
            </Box>
            <Box marginLeft={80} borderBottomWidth={1} marginRight={80} marginBottom={30}>
                <TextInput placeholder="姓名" placeholderTextColor={"lightgray"} />
            </Box>
            <Box marginLeft={80} borderBottomWidth={1} marginRight={80} marginBottom={30}>
                <TextInput placeholder="身分證字號" placeholderTextColor={"lightgray"} />
            </Box>
            <Box marginLeft={80} borderBottomWidth={1} marginRight={80} marginBottom={30}>
                <TextInput placeholder="手機號碼" placeholderTextColor={"lightgray"} />
            </Box>
            <Box marginLeft={80} borderBottomWidth={1} marginRight={80} marginBottom={30}>
                <TextInput placeholder="學號" placeholderTextColor={"lightgray"} />
            </Box>
            <Box marginLeft={80} borderBottomWidth={1} marginRight={80} marginBottom={30}>
                <TextInput placeholder="設定密碼" placeholderTextColor={"lightgray"} />
            </Box>
            <Box marginLeft={80} borderBottomWidth={1} marginRight={80} marginBottom={30}>
                {/* <Picker
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) =>
                        selectedValue(itemValue)
                    }>
                    <Picker.Item label="男性" value="male" />
                    <Picker.Item label="女性" value="female" />
                </Picker> */}
            </Box>
        </Box>

    )

}
export default SignUpScreen;