import React from "react";
import { View, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";
import PlayerSvg from '../../assets/player.svg';
import CalendarSvg from '../../assets/calendar.svg';
import { theme } from "../../global/styles/theme";

import { categories } from "../../Utils/categories";
import { GuildIcon } from "../GuildIcon";
import { GuildProps } from "../Guild";


export type AppointmentProps = {
    id: string;
    guild: GuildProps;
    category: string;
    date: string;
    description: string;
}

type Props = TouchableOpacityProps & {
    data: AppointmentProps;
}

export function Appointment({ data, ...rest}: Props) {
    const [category] = categories.filter(item => item.id === data.category);
    const { owner } = data.guild; 
    const { primary, on, secondary50, secondary70 } = theme.colors;

    return(
        <TouchableOpacity
        activeOpacity={0.9}
         {...rest}>
            <View style={styles.container}>
                <LinearGradient
                    style={styles.guildIconContainer}
                    colors={[secondary50, secondary70]}
                >
                    <GuildIcon />
                </LinearGradient>

                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.title}>
                            { data.guild.name }
                        </Text>

                        <Text style={styles.category}> 
                            { category.title }
                        </Text>
                    </View>

                    <View style={styles.footer}>
                        <View style={styles.dateInfo}>
                            <CalendarSvg />

                            <Text style={styles.date}>
                                    { data.date }
                            </Text>
                        </View>
                        

                        <View style={styles.playersInfo}>
                            <PlayerSvg fill={ owner ? primary : on }/>

                            <Text style={[
                                styles.player, 
                                { color: owner ? primary : on }
                            ]}>
                                { owner ? 'Host' : 'Guest'}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}