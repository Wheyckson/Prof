import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, Keyboard, KeyboardAvoidingView, Platform, Picker } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import { Feather } from '@expo/vector-icons';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import api from '../../services/api';

import styles from './styles';

function TeacherList() {
    const [teachers, setTeachers] = useState([]);
    const [favorites, setFavorites] = useState<number[]>([]);
    const [isFilterVisible, setIsFilterVisible] = useState(false);

    const [subject, setsubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedTeachers = JSON.parse(response);
                const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
                    return teacher.id;
                })

                setFavorites(favoritedTeachersIds);
            }
        });
    }

    useFocusEffect(
        React.useCallback(() => {
            loadFavorites();
        }, [])
    )

    function handleToggleFiltersVisible() {
        Keyboard.dismiss();
        setIsFilterVisible(!isFilterVisible);
    }

    async function handleFiltersSubmit() {
        loadFavorites();
        Keyboard.dismiss();

        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time,
            }
        });

        setIsFilterVisible(false);
        setTeachers(response.data);
    }

    return (
        <>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                enabled
            >
                <ScrollView style={styles.container}>
                    <PageHeader
                        title="Proffys disponíveis"
                        headerRight={(
                            <BorderlessButton onPress={handleToggleFiltersVisible}>
                                <Feather name="filter" size={25} color="#ef9931" />
                            </BorderlessButton>
                        )}
                    >

                        {isFilterVisible && (
                            <View style={styles.searchForm}>
                                <Text style={styles.label}>Matéria</Text>
                                <TextInput
                                    style={styles.input}
                                    value={subject}
                                    onChangeText={text => setsubject(text)}
                                    placeholder="Qual a matéria?"
                                    placeholderTextColor='#c1bccc'
                                />

                                <View style={styles.inputGroup}>
                                    <View style={styles.inputBlock}>
                                        <Text style={styles.label}>Dia da semana</Text>
                                        <TextInput
                                            style={styles.input}
                                            value={week_day}
                                            onChangeText={text => setWeekDay(text)}
                                            placeholder="Qual o dia?"
                                            placeholderTextColor='#c1bccc'
                                        />
                                    </View>

                                    <View style={styles.inputBlock}>
                                        <Text style={styles.label}>Horário</Text>
                                        <TextInput
                                            style={styles.input}
                                            value={time}
                                            onChangeText={text => setTime(text)}
                                            placeholder="Qual o horário?"
                                            placeholderTextColor='#c1bccc'
                                        />
                                    </View>
                                </View>

                                <RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
                                    <Text style={styles.submitButtonText}>Filtrar</Text>
                                </RectButton>
                            </View>
                        )}
                    </PageHeader>

                    <ScrollView
                        style={styles.teacherList}
                        contentContainerStyle={{
                            paddingHorizontal: 16,
                            paddingBottom: 16,

                        }}
                    >

                        {teachers.map((teacher: Teacher) => {
                            return (
                                <TeacherItem
                                    key={teacher.id}
                                    teacher={teacher}
                                    favorited={favorites.includes(teacher.id)}
                                />
                            )
                        })}
                    </ScrollView>
                </ScrollView >
            </KeyboardAvoidingView>
        </>

    );
}

export default TeacherList;