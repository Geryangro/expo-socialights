import React from 'react'
import { StyleSheet, View, Text } from "react-native";
import tailwind from 'tailwind-rn';
import useFonts from '../../utils'
import { FontsUse } from '../../style/fontuse'

const Title = (props) => {
    const { title, link } = props
    
    return (
        <View style={tailwind("flex flex-row items-center justify-between mb-4")}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.link}>{link}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontFamily: 'Proxima-Bold' 
    },
    link: {
        fontSize: 20,
        color: '#E33F89',
        fontFamily: 'Proxima-Bold'
    }
});

export default Title