import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions
} from "react-native";

const windowHeight = Dimensions.get('window').height;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (

    <ScrollView >
      <View style={styles.container}>
        <Text style={styles.Title}>Relipa Portal</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email."
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password."
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  inputView: {
    backgroundColor: "#ffffff",
    borderRadius:5,
    width: "90%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    borderColor:'#000',
    borderWidth:1,
    borderStyle:'solid',
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF1493",
  },
  container: {
    flexDirection:'column',
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    height:windowHeight,
  },
  Title:{
    fontSize:40,
    fontWeight:'600',
    color:'rgb(64, 169, 255)',
    paddingBottom:20
  }
 
});

export default Login;
