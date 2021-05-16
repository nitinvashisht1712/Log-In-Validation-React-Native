import React from 'react';
import { Image, ImageBackground, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import ErrorMessage from '../components/ErrorMessage';

const LogInScreen = () => {
    const validationSchema = Yup.object().shape({
      email: Yup.string().required().email().label("Email"),
      password:Yup.string().required().min(6).label("Password")
    });
    return (
        <KeyboardAvoidingView  style={styles.container}>
        <ImageBackground  source={require('../assets/imbg.jpg')}
        imageStyle={{resizeMode: 'cover'}}
         style={{flex:1,position:"absolute",top:0,bottom:0,right:0,left:0, alignItems: 'center',justifyContent:"flex-start"}}>
            <Image source={require('../assets/login.png')}
            style={{height:100, width:100, borderRadius:50,marginTop:150}}/>
            
            <Formik 
            initialValues={{email:'', password:''}}
            onSubmit={values => console.log(values)}
            validationSchema={validationSchema}>
                {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
                  <>
                   <View style={styles.loginform}> 
                   <Text style={styles.loginheader}>Log In</Text>
            <View style={styles.textinputView}>
                <Image source={require('../assets/email.png')}
                style={{height:20, width:20, marginHorizontal:15, tintColor:"#606060"}}/>
                <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onBlur={()=> setFieldTouched("email")}
              placeholder="Email"
              textContentType="emailAddress"
              onChangeText={handleChange("email")}
              style={styles.textinput}       
            
            />
            </View>
            <ErrorMessage error={errors.email} visible={touched.email}/>
            <View style={styles.textinputView}>
                <Image source={require('../assets/padlock.png')}
                style={{height:18, width:18, marginHorizontal:15, tintColor:"#606060"}}/>

                <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              onBlur={()=> setFieldTouched("password")}
              placeholder="Password"
              secureTextEntry={true}
              textContentType="password"
              onChangeText={handleChange("password")}
              
              style={styles.textinput}       
            
            />
            </View>
            <ErrorMessage error={errors.password} visible={touched.password}/>
            <View style={{flexDirection:"row",justifyContent:"space-around"}}>
            <TouchableOpacity >
                <Text style={styles.forgotpassword}>Forgot Password ? </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style={{marginVertical:15, marginHorizontal:20,color:"blue",}}>New User ? Sign Up </Text>
                </TouchableOpacity>
                </View>
            
                <View style={styles.loginbutton}>
                <TouchableOpacity onPress={handleSubmit}>
                    <Text style={styles.buttontext}> LOG IN  </Text>
                    
                    </TouchableOpacity>
                </View>
            


            </View>
                  </>

                )}

            </Formik>
           
            
        </ImageBackground>
        </KeyboardAvoidingView>
    )
}

export default LogInScreen;

const styles = StyleSheet.create({
     container: {
        flex: 1,
        height:"100%",
        width:"100%",
        alignItems: 'center',    
        justifyContent:"flex-start"  
      },
      forgotpassword:{
       marginVertical:15,
       marginHorizontal:40,
       color:"#828282",
       fontWeight:"700",
       fontSize:15,
      },
      loginform:{
         height:350,
         width:"90%",
         opacity:0.7,
         backgroundColor:"#FFF",
         borderBottomLeftRadius:150,
         borderTopRightRadius:150,        
         borderBottomRightRadius:10,
         borderTopLeftRadius:10,
         marginTop:30,
         paddingTop: 10,        
         shadowColor: "black",
         shadowOffset: {width:10, height: 10},
         shadowRadius:10,
         shadowOpacity:1,
         elevation:10,

      },
      loginheader:{
          alignSelf:"flex-start",
          marginTop:15,
          marginBottom:30,
          marginHorizontal:25,
          fontWeight:"bold",
          color:"#85144b",
          fontSize:40
      },
      
      textinputView:{
          alignItems:"center",
          flexDirection:"row",
          height:40,
          width:"90%",
          borderRadius:20,
          backgroundColor:"#dcdcdc",
          marginHorizontal:20,
          marginTop:10,
          
      },
      textinput:{
          height:30,
          width:"80%",
          
      },
      loginbutton : {
            position:"absolute",
            bottom:15,
            right:5,
            alignItems:"center",
            justifyContent:"center",
            height:40,
            width:"35%",
            borderRadius:22.5,
            backgroundColor:"red",
            marginHorizontal:20,
            marginVertical:10,
            shadowColor: "black",
            shadowOffset: {width:10, height: 10},
            shadowRadius:10,
            shadowOpacity:1,
            elevation:5,
      },
      buttontext:{
          fontWeight:"bold",
          color:"#FFF",
          fontSize:20
      }

})
