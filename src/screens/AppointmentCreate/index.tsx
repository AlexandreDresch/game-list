import React, { useState} from "react";
import { Feather } from '@expo/vector-icons';
import { Text, View, TouchableOpacity } from "react-native";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles"; 

import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { CategorySelect } from "../../components/CategorySelect";
import { GuildIcon } from "../../components/GuildIcon";


export function AppointmentCreate() {
    const [category, setCategory] = useState('') 
    return(
        <Background>
            <Header
                title="Schedule match"                 
            />

            <Text style={styles.label}>
                Category
            </Text>

            <CategorySelect 
                hasCheckBox
                setCategory={setCategory}
                categorySelected={category}
            />

            <View style={styles.form}>
                <TouchableOpacity>
                    <View style={styles.select}>
                        {
                            //<View 
                               // style={styles.image}
                            ///>
                            <GuildIcon />
                        }

                        <View style={styles.selectBody}>
                            <Text style={styles.label}>
                                Select a server
                            </Text>
                        </View>

                        <Feather 
                            name="chevron-right"
                            color={theme.colors.heading}
                            size={18}
                        />

                    </View>
                </TouchableOpacity>
            </View>
        </Background>
    )
}