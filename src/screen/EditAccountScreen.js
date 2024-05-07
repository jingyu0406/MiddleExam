import { Box, Text } from "@gluestack-ui/themed";
import React from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const EditAccountScreen = () => {
    return (
        <Box flex={1}>
            <Box >
                <MaterialCommunityIcons
                    name="account"
                    marginTop={40}
                    marginRight={120}
                    marginLeft={120}
                    marginBottom={20}
                    size={150}
                    padding={10}
                    color='white'
                    backgroundColor='pink'
                    style={{
                        borderRadius: 100
                    }}
                />
            </Box>
            <Box marginLeft={155} alignContent="center">
                <Text fontSize={15} >ID:123546465</Text>
            </Box>
            <Box flexDirection="row" width="auto" marginTop={20} justifyContent="center">
                <Box flexDirection="row" width={150} height={75} borderColor="#73DBC8" borderWidth={2} borderRadius={20} marginLeft={25}>
                    <Box>
                        <Text fontSize={20} marginTop={5} marginLeft={15}>姓名</Text>
                        <Text fontSize={15} marginTop={5} marginLeft={15}>嗡嗡嗡</Text>
                    </Box>
                    <Box>
                        {/* <MaterialCommunityIcons
                            name="pencil"
                            size={20}
                            marginLeft={50}
                            marginTop={20}
                        /> */}
                    </Box>
                </Box>
                <Box flexDirection="row" width={150} height={75} borderColor="#73DBC8" borderWidth={2} borderRadius={20} marginLeft={25} marginRight={25}>
                    <Box>
                        <Text fontSize={20} marginTop={5} marginLeft={15}>身分證字號</Text>
                        <Text fontSize={15} marginTop={5} marginLeft={15}>A123456789</Text>
                    </Box>
                    <Box>
                        {/* <MaterialCommunityIcons
                            name="pencil"
                            size={20}
                            marginLeft={50}
                            marginTop={20}
                        /> */}
                    </Box>
                </Box>
            </Box>
            <Box flexDirection="row" width="auto" marginTop={20} justifyContent="center">
                <Box flexDirection="row" width={150} height={75} borderColor="#73DBC8" borderWidth={2} borderRadius={20} marginLeft={25} >
                    <Box>
                        <Text fontSize={20} marginTop={5} marginLeft={15}>手機號碼</Text>
                        <Text fontSize={15} marginTop={5} marginLeft={15}>0912345678</Text>
                    </Box>
                    <Box>
                        {/* <MaterialCommunityIcons
                            name="pencil"
                            size={20}
                            marginLeft={50}
                            marginTop={20}
                        /> */}
                    </Box>
                </Box>
                <Box flexDirection="row" width={150} height={75} borderColor="#73DBC8" borderWidth={2} borderRadius={20} marginLeft={25} marginRight={25}>
                    <Box>
                        <Text fontSize={20} marginTop={5} marginLeft={15}>學號</Text>
                        <Text fontSize={15} marginTop={5} marginLeft={15}>1111119999</Text>
                    </Box>
                    <Box>
                        {/* <MaterialCommunityIcons
                            name="pencil"
                            size={20}
                            marginLeft={50}
                            marginTop={20}
                        /> */}
                    </Box>
                </Box>
            </Box>
            <Box width="auto" marginLeft={44} marginRight={44}>
                <Box height={75} borderColor="#73DBC8" borderWidth={2} borderRadius={20} marginTop={20} >
                    <Text fontSize={20} marginTop={5} marginLeft={15}>密碼</Text>
                    <Text fontSize={15} marginTop={5} marginLeft={15}>qwerty</Text>
                </Box>
                <Box flexDirection="row" height={75} borderColor="#73DBC8" borderWidth={2} borderRadius={20} marginTop={20} justifyContent="space-between" alignItems="center">
                    <Text fontSize={20} marginLeft={15}>女性</Text>
                    <MaterialCommunityIcons
                        name="chevron-down"
                        size={40}
                    />
                </Box>


            </Box>
        </Box>
    )





}
export default EditAccountScreen;