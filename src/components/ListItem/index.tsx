import {StyleSheet, Text, View} from "react-native";

interface ItemProps{
    data: {
        id: string;
        product_id: string;
        name: string;
        amount: string | number;
    }
}

export function ListItem({data}: ItemProps) {
    return(
        <View>
            <Text>Otem da lista</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})
