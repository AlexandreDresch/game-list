import React, { useState } from "react";
import { View, FlatList } from 'react-native';
import { useNavigation } from "@react-navigation/native";


import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { Appointment } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";

import { styles } from "./styles";
import { Background } from "../../components/Background";

export function Home() {
    const navigation = useNavigation<any>(); 
    
    const [category, setCategory] = useState('')

    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Legendary',
                icon: null,
                owner: true
            },
            category: '1',
            date: '06/22 at 08:40 PM',
            description: 'Day to win all!!'
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'Legendary',
                icon: null,
                owner: false
            },
            category: '1',
            date: '06/22 at 08:40 PM',
            description: 'Day to win all!!'
        },
        {
            id: '3',
            guild: {
                id: '1',
                name: 'Legendary',
                icon: null,
                owner: false
            },
            category: '4',
            date: '06/22 at 08:40 PM',
            description: 'Day to win all!!'
        },
        {
            id: '5',
            guild: {
                id: '1',
                name: 'Legendary',
                icon: null,
                owner: false
            },
            category: '1',
            date: '06/22 at 08:40 PM',
            description: 'Day to win all!!'
        },
        {
            id: '6',
            guild: {
                id: '1',
                name: 'Legendary',
                icon: null,
                owner: false
            },
            category: '1',
            date: '06/22 at 08:40 PM',
            description: 'Day to win all!!'
        },
        {
            id: '7',
            guild: {
                id: '1',
                name: 'Legendary',
                icon: null,
                owner: false
            },
            category: '1',
            date: '06/22 at 08:40 PM',
            description: 'Day to win all!!'
        },
    ]

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    function handleAppointmentDetails() {
        navigation.navigate('AppointmentDetails');
    }

    function handleAppointmentCreate() {
        navigation.navigate('AppointmentCreate');
    }

    return(
        <Background>
            <View
                style={styles.header}
            >
                <Profile />
                <ButtonAdd onPress={handleAppointmentCreate}/>
            </View>
                        
                <CategorySelect 
                    categorySelected={category}
                    setCategory={handleCategorySelect}
                />

                <ListHeader
                    title="Scheduled matches"
                    subtitle="Total 6"
                />

                <FlatList 
                        data={appointments}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <Appointment 
                            data={item} 
                            onPress={handleAppointmentDetails}
                            />
                        )}
                        ItemSeparatorComponent={() => <ListDivider />}
                        contentContainerStyle={{ paddingBottom: 69 }}
                        style={styles.matches}
                        showsVerticalScrollIndicator={false}
                    />         
    </Background>
    );
};