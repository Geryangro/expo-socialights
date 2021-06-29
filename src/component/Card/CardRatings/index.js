import React from 'react'
import { StyleSheet, View, Text, ImageBackground, Image, FlatList, ScrollView } from "react-native";
import tailwind from 'tailwind-rn';
import Plants from "../../../../assets/plant.svg"

const CardRatings = (props) => {
    const { 
        name, 
        backround, 
        ratings, 
        review, 
        branch, 
        date, 
        textline, 
        subtextline,
        user_ratings,
        scm 
    } = props

    return (
        <View style={[styles.cardSection, tailwind('mx-2 relative')]}>
            <ImageBackground style={[styles.backgroundImage]} source={{ uri: backround }}>
                <View style={styles.ribbon}>
                    <Text>+SC {scm}M</Text>
                </View>
            </ImageBackground>
            <View style={styles.imageSection}>
                <Plants style={styles.image}  />
            </View>
            <View style={[styles.cardProduct, tailwind('bg-white p-4')]}>
                <Text style={styles.ratings}>{ratings}</Text>
                <Text style={styles.reviews}>({review}k Reviews)</Text>
                <View style={tailwind('mt-4')}>
                    <Text style={styles.branch}>
                        {branch}
                    </Text>
                    <Text style={styles.ratings}>{name}</Text>
                </View>
            </View>
            <View style={styles.cardReviews}>
                <Text style={styles.date}>{date}</Text>
                <Text style={[styles.textline, tailwind('mt-2')]}>"{textline}"</Text>
                <Text style={styles.date}>{subtextline}</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {user_ratings.map((item, idx) => {
                        return (
                            <View key={idx} style={tailwind('flex-row items-center')}>
                                {idx < 3 ? (
                                    <Image style={[styles.avatar, ]} source={{ uri: item.image }} />
                                ) : (
                                    <Text style={[tailwind('ml-2'), styles.date]}>User & {user_ratings.length} others agree</Text>
                                )}
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        width: 240,
        height: 240,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        paddingTop: 25,
        overflow: 'hidden',
        position: 'relative',
        zIndex: 0
    },
    ribbon: {
        width: 120,
        padding: 10,
        paddingLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#79C931',
        height: 30,
        borderTopRightRadius: 3,
        borderBottomRightRadius: 3,
    },
    imageSection: {
        position: 'absolute',
        top: 150,
        bottom: 0,
        right: 0,
        zIndex: 3
    },
    image: {
        width: 125,
        height: 145,
    },
    cardSection: {
        width: 240,
        height: 600
    },
    cardProduct: {
        height: 180,
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
        zIndex: 2
    },
    ratings: {
        fontSize: 24,
        fontFamily: 'Proxima-Bold'
    },
    reviews: {
        fontSize: 14,
        color: '#4D4D4D'
    },
    branch: {
        fontSize: 18,
        color: '#4D4D4D'
    },
    cardReviews: {
        backgroundColor: '#B4D125',
        paddingHorizontal: 14,
        paddingTop: 20,
        paddingBottom: 14,
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12,
        height: 173,
        marginTop: -10,
        zIndex: 0,
    },
    avatar: {
        width: 22,
        height: 22,
        overflow: 'hidden',
        borderRadius: 150 / 2,
        borderColor: '#fff',
        borderWidth: 1,
    },
    date: {
        fontSize: 14,
        color: '#fff',
        fontWeight: '100'
    },
    textline: {
        fontSize: 20,
        color: '#fff',
        fontFamily: 'Proxima-Bold'
    }
});

export default CardRatings