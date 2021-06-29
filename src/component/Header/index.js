import React from 'react'
import { StyleSheet, View, Text, Image, Dimensions  } from "react-native";
import Constants from 'expo-constants';
import tailwind from 'tailwind-rn';
import LoupeIcon from "../../../assets/loupe.svg"
import UserIcon from "../../../assets/user.svg"
import MenuIcon from "../../../assets/menu.svg"

const Header = () => {
    return (
        <View style={[styles.container, styles.boxWithShadow, tailwind("px-4 py-4 flex flex-row justify-between")]}>
            <View>
                <Image style={styles.logo} source={require('../../../assets/logo.png')} />
            </View>
            <View style={tailwind("flex flex-row justify-between")}>
                <LoupeIcon style={styles.icon} fill={"#000"} />
                <UserIcon style={styles.icon} fill={"#000"} />
                <MenuIcon style={styles.icon} fill={"#000"} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: Constants.statusBarHeight
    },
    boxWithShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5
    },
    logo: {
        width: 127,
        height: 24
    },
    icon: {
        width: 25,
        height: 25,
        marginRight: 8,
        marginLeft: 8
    }
});

export default Header