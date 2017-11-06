import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { connect } from 'react-redux';

import { loginUser, logoutUser } from './authActions'

class Login extends Component {
  render() {    
    const { authenticated } = this.props.auth;
    
        if(authenticated) {
          return (
            <View style={styles.container}>
              <Text style={{ alignSelf: 'center' }}>You are logged in</Text>
              <Button
                title="LogOut"
                onPress={() => this.props.logoutUser()}
            />
            </View>
          )
        }
    
        return (
          <View style={styles.container}>
            <Button
              title="Login"
              onPress={() => this.props.loginUser()}
            />
          </View>
        )
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, { loginUser, logoutUser })(Login);

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
