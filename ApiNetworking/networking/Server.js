import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const Apis='https://api.androidhive.info/contacts/?fbclid=IwAR2okcesBe9xFsiIYVz7EspkWq0O-H0XOD3VwrcQdMZ7y0ec5eedAUXX94U';

export async function getResponeData() {
    try{
        let respone= await fetch (Apis);
        let responeJson= await respone.json();
        return responeJson.contacts;
    }catch(error){
        console.log(`Error is: ${isError}`);
    }
}