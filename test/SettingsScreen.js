
import { Box, Switch } from "@gluestack-ui/themed"
import React, { useState } from "react";
import {
    GluestackUIProvider,
    Center,
    HStack,
    Button,
    ButtonText,
    Text,
} from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";


const SettingsScreen = () => {
    const [counter, setCounter] = useState(0);
    const [colorMode, setColorMode] = useState("light");
    const toggleColorMode = () => {
        if (colorMode == "light") setColorMode("dark");
        else setColorMode("light");
    };



    return (
        <Box>
            <GluestackUIProvider config={config}>
                <Center flex={0} bg={colorMode == "light" ? "white" : "black"}>
                    <HStack space="3xl">
                        <Button
                            onPress={() => setCounter(counter + 2)}
                            size="md"
                            variant="solid"
                            action="primary"
                        >
                            <ButtonText size="3xl" color="white">
                                +
                            </ButtonText>
                        </Button>
                        <Button
                            onPress={() => setCounter(counter - 2)}
                            size="md"
                            variant="solid"
                            action="primary"
                        >
                            <ButtonText size="3xl" color="white">
                                -
                            </ButtonText>
                        </Button>
                    </HStack>
                    <Text size="3xl" mt="$10" color={colorMode == "dark" ? "white" : "black"}>
                        {counter}
                    </Text>

                    <HStack mt={20} space={8} alignItems="center">
                        <Text size="lg" px="$2" color={colorMode == "dark" ? "white" : "black"}>
                            {colorMode == "light" ? "Light Mode" : "Dark Mode"}
                        </Text>
                        <Switch
                            name="light Mode"
                            value={colorMode === "light"}
                            onToggle={toggleColorMode}
                            accessibilityLabel="display-mode"
                            accessibilityHint="light or dark mode"
                        />
                    </HStack>





                </Center>

            </GluestackUIProvider>

        </Box>




    )
}

export default SettingsScreen;