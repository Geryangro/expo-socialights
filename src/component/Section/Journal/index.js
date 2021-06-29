import React from 'react'
import { StyleSheet, View, Text, FlatList, Image } from "react-native";
import tailwind from 'tailwind-rn';
import Title from "../../Title";
import CardJournal from "../../Card/CardJournal"

const DATA = [
    {
      id: '1',
      title: 'How to write Seo',
      image: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29yayUyMGRlc2t8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
      user: {
          name: 'Firda',
          company: 'Kumparan',
          image: 'https://cdns.klimg.com/merdeka.com/i/w/news/2018/03/19/952723/540x270/awalnya-diremehkan-akhirnya-firda-buktikan-dari-makeup-bisa-menghasilkan.jpg'
      }
    },
    {
        id: '2',
        title: 'How to feed chiken',
        image: 'https://www.teahub.io/photos/full/90-906427_1920x1080-business-man-working-and-writing-in-laptop.jpg',
        user: {
            name: 'Alek',
            company: 'Tempo',
            image: 'https://cdns.klimg.com/merdeka.com/i/w/news/2018/03/19/952723/540x270/awalnya-diremehkan-akhirnya-firda-buktikan-dari-makeup-bisa-menghasilkan.jpg'
        }
    },
    {
        id: '3',
        title: 'How to create apps',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDylw3IrlSi-OCcnmY81CMMxixn7AmGL15Hermwd5ntNdKU5RhIukdoV8bJc9tlwkS4HQ&usqp=CAU',
        user: {
            name: 'Bejo',
            company: 'Facebook',
            image: 'https://cdns.klimg.com/merdeka.com/i/w/news/2018/03/19/952723/540x270/awalnya-diremehkan-akhirnya-firda-buktikan-dari-makeup-bisa-menghasilkan.jpg'
        }
    },
  ];

const SectionJournal = () => {
    return (
        <View style={[styles.section, tailwind("px-4 pt-6 pb-4")]}>
            <Title title={"Journal"} link={"See All"} />
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={DATA}
                renderItem={({ item }) => 
                    <CardJournal 
                        title={item.title}
                        image={item.image} 
                        user={item.user}
                    />
                }
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    section: {
        backgroundColor: '#F2F2F2',
        flex: 1
    }
});

export default SectionJournal