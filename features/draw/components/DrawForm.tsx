import React from "react";
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { useDraw } from "../hooks/useDraw";

export default function DrawForm() {

    
    const { handleDraw, resultString, loading } = useDraw()


    return (
        <View style={styles.container}>

            <Text style={styles.title}>🎲 Sorte do Dia</Text>

            <TouchableOpacity style={styles.button} onPress={handleDraw}>
                <Text style={styles.buttonText}>Gerar Sorte</Text>
            </TouchableOpacity>

            {loading && <ActivityIndicator size="large" color="#000" />}

            {resultString && (
                <View style={styles.resultBox}>
                    <Text style={styles.resultText}>{resultString}</Text>
                </View>
            )}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },

    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 30,
    },

    button: {
        backgroundColor: "#4CAF50",
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
    },

    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },

    resultBox: {
        marginTop: 40,
        padding: 20,
        backgroundColor: "#eee",
        borderRadius: 10,
    },

    resultText: {
        fontSize: 16,
        textAlign: "center",
        color: "#000000",
    },
});