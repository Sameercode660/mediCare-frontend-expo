import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const OurServices = ({image, title, description, price}: any) => {
    return (
        <Link href={`./${1}`} style={styles.container}>
            <View>
                <Image
                    source={{ uri: image }}
                    style={styles.imageStyle}
                ></Image>
            </View>
            <View>
                <Text style={styles.title}>Title</Text>
                <Text style={styles.description}>This is the description</Text>
            </View>
            <View>
                <Text style={styles.price}>Rs. 199</Text>
            </View>
        </Link>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: 5,
        paddingTop: 5,
        borderRadius: 20,
        gap: 4,         
    },
    imageStyle: {
        width: 100,
        height: 100,
        borderRadius: 10
    },
    title: {
        fontSize: 20,  // Slightly smaller than title
        fontWeight: '600',  // Semi-bold
        color: '#555',  // Medium gray for contrast
        marginBottom: 8,
    },
    description: {
        fontSize: 16,  // Standard body text size
        fontWeight: '400',  // Regular weight
        color: '#333',  // Dark color for readability
        lineHeight: 24,  // Increase line height for better readability
        marginBottom: 6,
    },
    price: {
        fontSize: 18,              // Larger font size
        fontWeight: '700',         // Bold to highlight the price
        color: '#000',             // Dark color for good contrast
        textAlign: 'right',        // Right align for a clean layout
        paddingVertical: 5,
    },
})

export default OurServices

