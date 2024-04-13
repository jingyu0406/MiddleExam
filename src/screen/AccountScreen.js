import { Box , Pressable, Text} from '@gluestack-ui/themed';
import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, View, Button } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '@react-navigation/native';


const AccountScreen = ({ navigation }) => {
    const {colors}=useTheme();
    return (
/*         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Account!</Text>
        </View> */
        <Box flex={1} padding={30}>
            <Box flexDirection='row' marginBottom={10}>
                <MaterialCommunityIcons 
                        marginRight={30} 
                        marginBottom={10}
                        name="account" 
                        size={80}
                        color='white'
                        backgroundColor='pink'
                        style={{
                            borderRadius: 100000
                        }}
                />
                <Box padding={5}>
                    <Text fontSize={20} marginBottom={10}>傘電鳥</Text>
                    <Text fontSize={15} color='gray'>ID:123546465</Text>
                </Box>
            </Box>
            <Pressable 
            margin
                marginHorizontal={7}
                backgroundColor= {colors.DayGreen}
                borderRadius={5}
                height={35}
                alignItems='center'
                justifyContent='center'
                width={320}
                onPress={()=>{
                null
            }} >
                <Text color='white'>編輯個人資料</Text>
            </Pressable>
            <Box width='auto' height={1} backgroundColor={colors.DayGreen} marginVertical={20}></Box>

            <Box 
                width='auto' 
                height={50} 
                backgroundColor={colors.DayLightGreen}
                marginVertical={10} 
                alignItems='center' 
                justifyContent='center'
                borderRadius={5}
            >
                <Box flexDirection='row' justifyContent='space-between' alignItems='center' width='100%' paddingHorizontal={15}>
                    <Text fontSize={20}>借傘歷程</Text>
                    <MaterialCommunityIcons
                        name="chevron-right" 
                        size={40}
                        color='white'
                />
                </Box>
            </Box>
            <Box 
                width='auto' 
                height={50} 
                backgroundColor={colors.DayLightGreen}
                marginVertical={10} 
                alignItems='center' 
                justifyContent='center'
                borderRadius={5}
            >
                <Box flexDirection='row' justifyContent='space-between' alignItems='center' width='100%' paddingHorizontal={15}>
                    <Text fontSize={20}>維護公告</Text>
                    <MaterialCommunityIcons
                        name="chevron-right" 
                        size={40}
                        color='white'
                />
                </Box>
            </Box>

            <Box 
                width='auto' 
                height={50} 
                backgroundColor={colors.DayLightGreen}
                marginVertical={10} 
                alignItems='center' 
                justifyContent='center'
                borderRadius={5}
            >
                <Box flexDirection='row' justifyContent='space-between' alignItems='center' width='100%' paddingHorizontal={15}>
                    <Text fontSize={20}>常見問題</Text>
                    <MaterialCommunityIcons
                        name="chevron-right" 
                        size={40}
                        color='white'
                />
                </Box>
            </Box>

            <Box 
                width='auto' 
                height={50} 
                backgroundColor='white'
                borderWidth={1}
                borderColor= {colors.DayGreen}
                marginVertical={10}
                alignItems='center' 
                justifyContent='center'
                borderRadius={5}
                
            >
                <Box flexDirection='row' justifyContent='space-between' alignItems='center' width='100%' paddingHorizontal={15}>
                    <Text fontSize={20} color={colors.DayGreen}>登出帳號</Text>
                    <MaterialCommunityIcons
                        name="chevron-right"
                        size={40}
                        color='white'
                    />
                </Box>
            </Box>




        </Box>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default AccountScreen