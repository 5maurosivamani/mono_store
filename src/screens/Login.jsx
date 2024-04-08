import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import ScreenLayout from '../layout/ScreenLayout';
import {TextInput} from 'react-native-paper';
import CustomTextInput from '../components/TextInput';
import CommonButton from '../components/CommonButton';
import {FaceBookImage, GoogleImage} from '../global/Constants';

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <ScreenLayout>
      <ScrollView
        contentContainerStyle={{flexGrow: 1, justifyContent: 'flex-end'}}
        showsVerticalScrollIndicator={false}>
        <View>
          <View className="mb-10">
            <Text className="font-poppins-medium text-2xl text-black">
              Welcome 👋
            </Text>
            <Text className="font-poppins-regular text-gray">
              Sign in your account
            </Text>
          </View>

          {/* Form */}
          <View>
            <View className="mb-10">
              {/* Email */}
              <CustomTextInput
                setText={setEmail}
                text={email}
                left={
                  <TextInput.Icon
                    icon="email-outline"
                    color="#6B7280"
                    disabled
                  />
                }
                label="email"
                className="mb-4"
              />

              {/* Password */}
              <CustomTextInput
                setText={setPassword}
                text={password}
                label="Password"
                secureTextEntry={showPassword ? false : true}
                left={
                  <TextInput.Icon
                    icon="lock-outline"
                    color="#6B7280"
                    disabled
                  />
                }
                right={
                  <TextInput.Icon
                    icon={showPassword ? 'eye-off-outline' : 'eye-outline'}
                    color="#6B7280"
                    onPress={() => setShowPassword(pre => !pre)}
                  />
                }
                className="mb-4"
              />

              <TouchableOpacity activeOpacity={0.7}>
                <Text className="text-black font-poppins-medium ">
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>
            {/* Custom submit button */}
            <CommonButton title="Sign in" />
          </View>

          {/* horizontal line */}
          <View className="relative justify-center items-center">
            <View className="h-0.5 bg-gray-100 w-full my-10" />
            <View className="bg-white absolute px-2">
              <Text className="font-poppins-regular text-gray-300">OR</Text>
            </View>
          </View>

          {/* O-Auth */}
          <View className="flex-row gap-8 mb-5">
            <TouchableOpacity
              activeOpacity={0.8}
              className="py-3 border border-gray-200 rounded-lg items-center flex-1">
              <Image source={GoogleImage} className="h-6 w-6" />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              className="py-3 border border-gray-200 rounded-lg items-center  flex-1">
              <Image source={FaceBookImage} className="h-6 w-6" />
            </TouchableOpacity>
          </View>

          <View className="flex-row justify-center item-center mb-4">
            <Text className="font-poppins-regular">
              Don’t have an account?{' '}
            </Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text className="font-poppins-semibold"> Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ScreenLayout>
  );
};

export default Login;

const styles = StyleSheet.create({});
