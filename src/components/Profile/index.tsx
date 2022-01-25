import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

export function Profile() {
    return(
        <View style={styles.container}>
            <View style={styles.user}>
                <Text style={styles.greeting}>
                    Hello, 
                </Text>

                <Text style={styles.username}>

                </Text>
            </View>

            <Text>  // 49
                Today is victory day. 
            </Text>
        </View>
    )
}