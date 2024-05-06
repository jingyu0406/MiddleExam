import React from "react";
import { Box, Text } from "@gluestack-ui/themed";
import { selectBorrow, borrowToggle } from "../redux/borrowSlice";
import { useDispatch, useSelector } from "react-redux";

import { selectToggle } from "../redux/toggleSlice";

const Hint = () => {
    const borrowed = useSelector(selectBorrow);
    const colormode = useSelector(selectToggle);

    const hintText = borrowed ? "您已借傘" : "您未借傘"
    const hintContent = borrowed ? "點擊地點圖標提示即可還傘" : "點擊地點圖標提示即可借傘"
    return (
        <Box
            width={200}
            height={50}
            backgroundColor="white"
            position="absolute"
            top="5%" // 垂直居中
            left="50%" // 水平居中
            marginLeft={-100} // 將自身寬度的一半往左移動，以實現水平居中
            marginTop={-25} // 將自身高度的一半往上移動，以實現垂直居中
            borderRadius={5}
            borderWidth={1}
            borderColor={colormode == "light" ? "#1DA189" : "#FFB800"}
            justifyContent="center"
            alignItems="center"
        >

            <Text fontSize={10} fontWeight="800">{hintText}</Text>
            <Text fontSize={10}>{hintContent}</Text>
        </Box>
    )
}

export default Hint
