import React from 'react'
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import tailwind from 'tailwind-rn';
import Correct from "../../../../assets/correct.svg"
import AddUser from "../../../../assets/add-user.svg"
import Fastfood from "../../../../assets/fast-food.svg"
import Laptop from "../../../../assets/laptop.svg"
import Scooter from "../../../../assets/scooter.svg"
import Metal from "../../../../assets/maloik.svg"
import OfficeBuilding from "../../../../assets/office-building.svg"

const CardSocialty = (props) => {
    const { 
        title, 
        verification, 
        image, 
        type, 
        repotation, 
        infulnce, 
        interest, 
        nickName, 
        level 
    } = props
    
    const renderIcon = (type) => {
        switch (type) {
            case 'computer':
                return <Laptop style={styles.iconInterest} />
            case 'bike':
                return <Scooter style={styles.iconInterest} />
            case 'music':
                return <Metal style={styles.iconInterest} />
            case 'company':
                return <OfficeBuilding style={styles.iconInterest} />
            case 'food':
                return <Fastfood style={styles.iconInterest} />
            default:
                return null
        }
    }

    return (
        <View style={[styles.cardSection, tailwind('mx-2 relative')]}>
            <Image source={{ uri: image }} style={styles.image} imageStyle={{ borderRadius: 6}} />
            <View style={styles.card}>
                <View style={[tailwind('flex flex-row justify-between')]}>
                    <View style={tailwind('-mt-2')}>
                        <Text style={styles.titleCard}>{title}</Text>
                        <Text style={styles.subTitleCard}>{type}</Text>
                    </View>
                    <View style={[tailwind('flex flex-row justify-between')]}>
                        {verification && (
                            <Correct style={styles.iconVerification} />
                        )}
                        <AddUser style={styles.iconAdduser} />
                    </View>
                </View>
                <View style={[tailwind('flex flex-row justify-between mt-2')]}>
                    <View>
                        <View style={tailwind("flex-row")}>
                            <Text style={styles.titleCard}>{repotation}</Text>
                            <Text style={[tailwind('self-end'), styles.numbersTitle]}>%</Text>
                        </View>
                        <Text style={styles.numbersTitle}>Repotation</Text>
                    </View>
                    <View>
                        <View style={tailwind("flex-row")}>
                            <Text style={styles.titleCard}>{infulnce}</Text>
                            <Text style={[tailwind('self-end'), styles.numbersTitle]}>%</Text>
                        </View>
                        <Text style={styles.numbersTitle}>Infulnce</Text>
                    </View>
                </View>
                <View style={tailwind('mt-2')}>
                    <ScrollView horizontal>
                        {interest.map((item, idx) => {
                            return (
                                <View key={idx} style={[styles.iconInterestBackground, { backgroundColor: item.color }]}>
                                    {renderIcon(item.type)}
                                </View>
                            )
                        })}
                    </ScrollView>
                </View>
                <View style={[tailwind('flex flex-row justify-between mt-2')]}>
                    <Text>{nickName}</Text>
                    <Text>Level: {level}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 216,
        height: 145,
        overflow: 'hidden',
        borderRadius: 8
    },
    cardSection: {
        height: 304,
    },
    card: {
        backgroundColor: '#fff',
        marginHorizontal: 10,
        position: 'absolute',
        bottom: 10,
        top: 110,
        flex: 1,
        left: 0,
        right: 0,
        borderRadius: 5,
        padding: 14,
    },
    iconVerification: {
        width: 16,
        height: 16,
        marginRight: 8
    },
    iconAdduser: {
        width: 30,
        height: 30
    },
    titleCard: {
        fontSize: 20,
        fontFamily: 'Proxima-Bold',
        marginRight: 4
    },
    subTitleCard: {
        fontSize: 18,
        color: '#4D4D4D'
    },
    numbersTitle: {
        fontSize: 14,
        color: '#4D4D4D'
    },
    iconInterestBackground: {
        padding: 4,
        borderRadius: 150 / 2,
        alignItems: 'center',
        marginRight: 4
    },  
    iconInterest: {
        width: 20,
        height: 20
    },
});

export default CardSocialty