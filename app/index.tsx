import React from "react";
import { View } from "react-native";
import FormLogin from "./features/autentication/components/LoginForm";

export default function login() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <FormLogin />
        </View>
    )
}
//titulo
//form
