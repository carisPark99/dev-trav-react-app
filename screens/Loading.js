import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {icons} from '../constants';


export default function Loading(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Data is being requested. Please wait..</Text>
        </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1E3267',
    },
    title: {
        fontSize: 30,
        fontWeight: '700'
    }
})
