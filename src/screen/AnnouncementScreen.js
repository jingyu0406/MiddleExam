import { Box, FlatList, Text } from "@gluestack-ui/themed";
import React from "react";
import { useSelector } from "react-redux";
import { selectAnnouncement } from "../redux/announcementSlice";
import Announce from "../component/Announce";

const Announcement = () => {
    const announcement = useSelector(selectAnnouncement)
    return (
        <Box>
            <FlatList
                data={announcement}
                renderItem={({ item }) =>
                    <Announce text={item.text} text2={item.text2} id={item.id} />
                    /*           (<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                                <Text>{item.text}</Text>
                                <Button title="Delete" onPress={() => handleDeleteMessage(item.id)} />
                              </View> )*/
                }
                keyExtractor={item => item.id.toString()}
            />
        </Box>
    )
}

export default Announcement;