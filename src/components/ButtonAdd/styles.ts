import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        height: 55,
        width: 55,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    }
});