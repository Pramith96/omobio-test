import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';




const RegisterScreen = () => {

    const [userName, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isSubmit, setIsSubmit] = useState(false);


    const userNameHandler = (text)=> {
        setUsername(text)
    }

    return(
        <View style = {styles.container}>
        <TextInput placeholder = 'UserName' 
        styles = {styles.input}
        onChangeText = {userNameHandler}
         />
        <TextInput placeholder = 'Email' 
        styles = {styles.input} 
        autoCapitalize = 'none'
        onChangeText = {(text) => setEmail(text)}
        />
        <TextInput 
        placeholder = 'password' 
        styles = {styles.input} 
        secureTextEntry = {true} 
        autoCapitalize = 'none'
        onChangeText = {(text) => setPassword(text)}
        />

        <View style = {styles.buttonContainer}>
            <Button 
                title = 'Register'
                onPress = {() => setIsSubmit(true)}
            />
        </View>
       </View>

    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        paddingVertical:5,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        width: '70%',
        paddingHorizontal: 8,

     },

     buttonContainer: {
        marginTop: 20
     }

});


export default RegisterScreen;