import React, { useState } from "react";
import { View, FlatList, Text } from 'react-native';


import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { Appointment } from "../../components/Appointment";

import { styles } from "./styles";

export function Home() {
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
        }
    ]

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    return(
        <View>
            <View
                style={styles.header}
            >
                <Profile />
                <ButtonAdd />
            </View>

            <View>
                <CategorySelect 
                    categorySelected={category}
                    setCategory={handleCategorySelect}
                />

                <View style={styles.content}>
                    <ListHeader
                        title="Scheduled matches"
                        subtitle="Total 6"
                    />
                    
                    <FlatList 
                        data={appointments}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <Appointment data={item} />
                        )}
                        style={styles.matches}
                        showsVerticalScrollIndicator={false}
                    />
                </View>            
            </View>
        </View>
    );
};