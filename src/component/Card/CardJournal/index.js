import React from 'react'
import { StyleSheet, View, Text, ImageBackground, Image } from "react-native";
import tailwind from 'tailwind-rn';

const CardJournal = (props) => {
    const { 
        title, 
        image, 
        user, 
    } = props

    return (
        <View style={[styles.cardSection, tailwind('mx-2 relative')]}>
            <ImageBackground source={{ uri: image }} style={styles.image} imageStyle={{ borderRadius: 6}}>
                <View style={styles.overlay}>
                    <View style={styles.content}>
                        <Text style={styles.title}>{title}</Text>
                        <View style={tailwind('flex-row items-center')}>
                            <Image source={{ uri: user.image }} style={styles.imageAvatar} />
                            <View>
                                <Text style={styles.name}>{user.name}</Text>
                                <Text style={styles.company}>From {user.company}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    cardSection: {
        height: 204,
    },
    image: {
        width: 216,
        height: 145,
        overflow: 'hidden',
        borderRadius: 8
    },
    overlay: {
        backgroundColor:'rgba(0, 0, 0, 0.4)',
        height: '100%',
        position: 'relative'
    },
    title: {
        color: '#fff',
        fontSize: 20,
        marginBottom: 6,
        fontFamily: 'Proxima-Bold'
    },
    imageAvatar: {
        width: 24,
        height: 24,
        overflow: 'hidden',
        borderRadius: 150 / 2,
        borderColor: '#fff',
        borderWidth: 1,
        marginRight: 10
    },
    content: {
        position: 'absolute',
        bottom: 0,
        padding: 12,
    },
    name: {
        fontSize: 14,
        color: '#fff'
    },
    company: {
        fontSize: 14,
        color: '#fff',
        fontWeight: '100'
    }
});

export default CardJournal