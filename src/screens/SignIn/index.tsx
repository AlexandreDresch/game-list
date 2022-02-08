import React from "react";
import { View,
     Text,
      Image,
    } from 'react-native';

import { ButtonIcon } from "../../components/Buttonicon";
import IllustrationImg from '../../assets/illustration.png';
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";


export function SignIn() {
    const navigation = useNavigation();

    function handleSignIn() {
        navigation.navigate('Home')
    }
    return(
        <View style={styles.container}>
            <Image 
            source={IllustrationImg} 
            style={styles.image} 
            resizeMode="stretch"
            />

            <View style={styles.content}>
                <Text style={styles.title}>
                    Conect {'\n'}
                    and organize {'\n'}
                    your games
                </Text>

                <Text style={styles.subtitle}>
                    Create groups to play your favorite {'\n'}
                    games with your friends
                </Text>

                <ButtonIcon 
                title="Join with Discord"
                activeOpacity={0.7}
                onPress={handleSignIn}/>
                
            </View>

        </View>
    );
};
