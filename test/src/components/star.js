import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Star = ({ star }) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
        if (star > i) {
            stars.push(
                <Image
                    source={{ uri: 'https://github.com/AMA0099112/AppHw4/blob/main/picture/star.jpg?raw=true' }}
                    style={styles.star}
                    key={i}
                />
            )
        }
        else {
            stars.push(
                <Image
                    source={{ uri: 'https://github.com/AMA0099112/AppHw4/blob/main/picture/stargray.jpg?raw=true' }}
                    style={styles.star}
                    key={i}
                />
            )
        }
    }
    return (
        <View>
            <View style={styles.stars}>
                {stars}

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    stars: {
        flexDirection: 'row',
        marginVertical: 8
    },
    star: {
        marginRight: 4,
        width: 20,
        height: 20
    }
});

export default Star;