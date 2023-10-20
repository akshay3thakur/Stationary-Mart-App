import { StyleSheet, Text, View, ScrollView, TextInput, Button, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react';
import { app, database } from '../firebaseConfig.js';
import { ref, set, get } from 'firebase/database';

import { Alert } from 'react-native';
const InsertScreen = ({ navigation }) => {
  const [product, setProduct] = useState({
    id: '',
    pname: '',
    price: '',
    brand: '',
    quantity: '',
  });

  const [searchId, setSearchId] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const viewList = () => {
    navigation.navigate('View');
  };

  const insertProduct = () => {
    if (
      product.id === '' ||
      product.pname === '' ||
      product.price === '' ||
      product.brand === '' ||
      product.quantity === ''
      ) {
        Alert.alert('Error', 'Please fill in all fields');
      } else if (!/AC-\d+/.test(product.id) || !/AC-/.test(product.pname)) {
        Alert.alert('Error', 'Product ID should start with "AC-" and contain only numbers. Product Name should start with "AC-".');
      } else {
        set(ref(database, 'products/' + product.id), product)
          .then(() => {
            console.log('Product inserted successfully.');
            Alert.alert('Success', 'Data successfully added');
          })
          .catch((error) => {
            console.error('Error inserting product:', error);
          });
      }
    };
  
  const updateProduct = () => {
    if (
      product.id === '' ||
      product.pname === '' ||
      product.price === '' ||
      product.brand === '' ||
      product.quantity === ''
    ) {
      Alert.alert('Error', 'Please fill in all fields');
    } else {
      const updatedProduct = product; 
      set(ref(database, 'products/' + updatedProduct.id), updatedProduct)
        .then(() => {
          console.log('Product updated successfully.');
          Alert.alert('Success', 'Data successfully updated');
        })
        .catch((error) => {
          console.error('Error updating product:', error);
        });
    }
  };
  
  const removeProduct = () => {
    if (product.id === '') {
      Alert.alert('Error', 'Product ID cannot be blank');
      return;
    }
  
    const idToRemove = product.id; 
    const productRef = ref(database, 'products/' + idToRemove);
  
    get(productRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          set(ref(database, 'products/' + idToRemove), null)
            .then(() => {
              console.log('Product removed successfully.');
              Alert.alert('Success', 'Data successfully removed');
            })
            .catch((error) => {
              console.error('Error removing product:', error);
            });
        } else {
          console.log('Product not found');
          Alert.alert('Error', 'Product not found');
        }
      })
      .catch((error) => {
        console.error('Error finding product:', error);
      });
  };
  

  const findProduct = () => {
    const idToFind = searchId;
    const productRef = ref(database, 'products/' + idToFind);

    get(productRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const productData = snapshot.val();
          console.log('Product found:', productData);
          setSearchResult(productData); 
        } else {
          console.log('Product not found');
          setSearchResult(null); 
        }
      })
      .catch((error) => {
        console.error('Error finding product:', error);
      });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView>
        <View id="enterdetails">
          <Text style={styles.input}>Enter details</Text>

          {/* Product ID input */}
          <Text>Product ID (starts with AC-)</Text>
          <TextInput
            id="enterID"
            style={styles.inputField}
            onChangeText={(text) => setProduct({ ...product, id: text })}
          />

          {/* Product Name input */}
          <Text>Product Name (starts with AC-)</Text>
          <TextInput
            id="enterName"
            style={styles.inputField}
            onChangeText={(text) => setProduct({ ...product, pname: text })}
          />

          {/* Cost input */}
          <Text>Cost</Text>
          <TextInput
            id="enterPrice"
            style={styles.inputField}
            onChangeText={(text) => setProduct({ ...product, price: text })}
          />

          {/* Brand input */}
          <Text>Brand</Text>
          <TextInput
            id="enterBrand"
            style={styles.inputField}
            onChangeText={(text) => setProduct({ ...product, brand: text })}
          />

          {/* Quantity input */}
          <Text>Quantity</Text>
          <TextInput
            id="enterQuant"
            style={styles.inputField}
            onChangeText={(text) => setProduct({ ...product, quantity: text })}
          />

          <Button title="Add" onPress={insertProduct} />
          <Button title="Update" onPress={updateProduct} />
          <Button title="Remove" onPress={removeProduct} />
        </View>

        <View id="finddetails">
          <Text>Find by ID</Text>
          <TextInput
            id="findID"
            style={styles.inputField}
            value={searchId}
            onChangeText={(text) => setSearchId(text)}
          />

          <Button title="Search" onPress={findProduct} />
        </View>

        {/* Display search results */}
        {searchResult && (
          <View>
            <Text>Product Found:</Text>
            <Text>ID: {searchResult.id}</Text>
            <Text>Name: {searchResult.pname}</Text>
            <Text>Price: {searchResult.price}</Text>
            <Text>Brand: {searchResult.brand}</Text>
            <Text>Quantity: {searchResult.quantity}</Text>
          </View>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default InsertScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  inputField: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom: 10,
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
