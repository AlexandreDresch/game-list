import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { useAuth } from "../../hooks/auth";

import { Avatar } from "../Avatar";
import { styles } from "./styles";

export function Profile() {
    const { user, signOut } = useAuth();

    function handleSignOut() {
        Alert.alert('Logout', 'Do you want to leave GamePlay?', 
        [
            {
            text: 'No',
            style: 'cancel'
        },
        {
            text: 'Yes',
            onPress: () => signOut()
        }
        ])
    }

    return(
        <View style={styles.container}>

            <TouchableOpacity 
                activeOpacity={0.7}
                onPress={handleSignOut}
                >
                <Avatar urlImage={user.avatar}/>
            </TouchableOpacity>

            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Hello, 
                    </Text>

                    <Text style={styles.username}>
                        { user.firstName }
                    </Text>
                    
                </View>
                    
                <Text style={styles.message}> 
                    Today is victory day. 
                </Text>
            </View>
        </View>
    )
}