import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const HelpCenterScreen = () => {
  const questions = [
    {
      question: 'How do I add a new product?',
      answer: 'You can add a new product from the "Insert" page. Fill in the required details and click the "Add" button. If you still fail to understand contact the nearest mental hospital.',
    },
    {
      question: 'How can I update product information?',
      answer: 'To update a product, go to the "Insert" page and enter the product ID. Update the information and click the "Update" button. easyyy pezzzzy.',
    },
    {
        question: 'How do I remove a product from the database?',
        answer: 'You can remove a product by going to the "Insert" page, entering the product ID, and clicking the "Remove" button. ACTION IS NOT REVERSIBLE😥😨.'
      },
      {
        question: 'How can I search for a specific product?',
        answer: 'On the "Insert" page, enter the product ID in the "Find by ID" section and click the "Search" button. If you are lucky enough then details will be displayed.'
      },
      {
        question: 'What if I forget the product ID?',
        answer: 'Meditate :)                                                                                              If you forget the product ID, you can still view the list of all products on the "View Products" page. All Available productsand details are displayed there.'
      },
      {
        question: 'How do I contact support?',
        answer: 'You can reach out to our  support team via Tinder or at last Email at androidclub@vit.ac.in or through other Available options on the "Help Center" page.'
      },
      {
        question: 'What should I do if the app crashes or has issues?',
        answer: 'If you encounter any issues or app crashes, delete it and go to sleep.'
      }
  ];

  const openWhatsApp = () => {
    Linking.openURL(`whatsapp://send?phone=${9955582384}&text=${"Hello Shivam Bhaiyya kaise ho app"}`); 
  };

  const openGmail = () => {
    Linking.openURL('mailto:androidclub@vit.ac.in?subject=[From%20App]%20Donot_remove_this_Subject_Line'); 
  };

  const openInstagram = () => {
    Linking.openURL('https://www.instagram.com/androidvitc/'); 
  };

  const openLinkedIn = () => {
    Linking.openURL('https://www.linkedin.com/company/android-club-vitc/mycompany/'); 
  };

  return (
    <ScrollView style={styles.container}>
      {questions.map((item, index) => (
        <View key={index} style={styles.questionContainer}>
          <Text style={styles.question}>{item.question}</Text>
          <Text style={styles.answer}>{item.answer}</Text>
        </View>
      ))}
      <View style={styles.buttonContainer}>
        <Pressable style={styles.iconButton} onPress={openWhatsApp}>
          <Icon name="whatsapp" size={30} color="white" />
        </Pressable>
        <Pressable style={styles.iconButton} onPress={openGmail}>
          <Icon name="envelope" size={30} color="white" />
        </Pressable>
        <Pressable style={styles.iconButton} onPress={openInstagram}>
          <Icon name="instagram" size={30} color="white" />
        </Pressable>
        <Pressable style={styles.iconButton} onPress={openLinkedIn}>
          <Icon name="linkedin" size={30} color="white" />
        </Pressable>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  questionContainer: {
    marginVertical: 10,
  },
  question: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  answer: {
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'lightblue',
    width: '22%',
  },
  buttonText: {
    fontSize: 14,
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '22%',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 50, 
    elevation: 3,
    backgroundColor: 'lightblue',
  },
});

export default HelpCenterScreen;
