import React, { useState} from "react";
import { Feather } from '@expo/vector-icons';
import { Text, View, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, } from "react-native";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles"; 

import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { CategorySelect } from "../../components/CategorySelect";
import { GuildIcon } from "../../components/GuildIcon";
import { SmallInput } from "../../components/SmallInput";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import { ModalView } from "../../components/ModalView";
import { Guilds } from "../Guilds";
import { GuildProps } from "../../components/Guild";

export function AppointmentCreate() {
    const [category, setCategory] = useState('');
    const [openGuildsModal, setOpenGuildsModal] = useState(false);
    const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

    function handleOpenGuilds() {
        setOpenGuildsModal(true);
    }

    function handleCloseGuilds() {
        setOpenGuildsModal(false);
    }

    function handleGuildsSelect(guildSelected : GuildProps) {
        setGuild(guildSelected);
        setOpenGuildsModal(false);        
    }

    function handleCategorySelect(categoryId : string) {
        setCategory(categoryId);      
    }

    return(
        <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height' }
        style={styles.container}        
        >
            <Background>
                <ScrollView>
                
                    <Header
                        title="Schedule match"                 
                    />

                    <Text style={[styles.label, { marginLeft: 24, marginTop: 36, marginBottom: 18}]}>
                        Category
                    </Text>

                    <CategorySelect 
                        hasCheckBox
                        setCategory={handleCategorySelect}
                        categorySelected={category}
                    />

                    <View style={styles.form}>
                        <TouchableOpacity onPress={handleOpenGuilds}>
                            <View style={styles.select}>
                                {
                                guild.icon ? <GuildIcon /> : <View style={styles.image}/>                                
                                }

                                <View style={styles.selectBody}>
                                    <Text style={styles.label}>
                                        {guild.name ?  guild.name : 'Select a server'}
                                    </Text>
                                </View>

                                <Feather 
                                    name="chevron-right"
                                    color={theme.colors.heading}
                                    size={18}
                                />

                            </View>
                        </TouchableOpacity>

                        <View style={styles.field}>
                            <View>
                                <Text style={[
                                    styles.label,
                                    { marginBottom: 12 }
                                    ]}>
                                Month and day 
                                </Text>   

                                <View style={styles.column}>
                                    <SmallInput maxLength={2}/>
                                    <Text style={styles.divider}>
                                        /
                                    </Text>
                                    <SmallInput maxLength={2}/>
                                </View>                    
                            </View>

                            <View>
                                <Text style={[
                                    styles.label,
                                    { marginBottom: 12 }
                                    ]}>
                                Hour and minute 
                                </Text>   

                                <View style={styles.column}>
                                    <SmallInput maxLength={2}/>
                                    <Text style={styles.divider}>
                                        :
                                    </Text>
                                    <SmallInput maxLength={2}/>
                                </View>                    
                            </View>               
                        </View>
                        <View style={[styles.field, {marginBottom: 12}]}>
                            <Text style={styles.label}>
                                Description
                            </Text>

                            <Text style={styles.characterLimit}>
                                Max 100 characters
                            </Text>
                        </View> 
                        <TextArea 
                            multiline
                            maxLength={100}
                            numberOfLines={5}
                            autoCorrect={false}
                        />

                        <View style={styles.footer}>
                            <Button title="Schedule"/>
                            
                        </View>
                    </View>

                </ScrollView>

                <ModalView visible={openGuildsModal} closeModal={handleCloseGuilds}>
                    <Guilds handleGuildSelect={handleGuildsSelect}/>
                </ModalView>
            </Background>
        </KeyboardAvoidingView>
    )
}