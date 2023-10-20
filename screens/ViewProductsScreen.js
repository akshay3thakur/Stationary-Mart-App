import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ViewProductsScreen = () => {
  const products = [
    { ID: "AC-001", Product: "AC-Pen", Quantity: 7 },
    { ID: "AC-002", Product: "AC-Pencil", Quantity: 3 },
    { ID: "AC-003", Product: "AC-Notebook", Quantity: 5 },
    { ID: "AC-004", Product: "AC-Backpack", Quantity: 8 },
    { ID: "AC-005", Product: "AC-Water Bottle", Quantity: 2 },
    { ID: "AC-006", Product: "AC-Desk Chair", Quantity: 6 },
    { ID: "AC-007", Product: "AC-Desk Lamp", Quantity: 4 },
    { ID: "AC-008", Product: "AC-Headphones", Quantity: 9 },
    { ID: "AC-009", Product: "AC-Mouse", Quantity: 1 },
    { ID: "AC-010", Product: "AC-Keyboard", Quantity: 10 },
    { ID: "AC-011", Product: "AC-Monitor", Quantity: 7 },
    { ID: "AC-012", Product: "AC-USB Drive", Quantity: 3 },
    { ID: "AC-013", Product: "AC-External Hard Drive", Quantity: 5 },
    { ID: "AC-014", Product: "AC-Phone Charger", Quantity: 8 },
    { ID: "AC-015", Product: "AC-Tablet", Quantity: 2 },
    { ID: "AC-016", Product: "AC-Smartphone", Quantity: 6 },
    { ID: "AC-017", Product: "AC-Headset", Quantity: 4 },
    { ID: "AC-018", Product: "AC-Desk Organizer", Quantity: 9 },
    { ID: "AC-019", Product: "AC-File Cabinet", Quantity: 1 },
    { ID: "AC-020", Product: "AC-Bookshelf", Quantity: 10 },
    { ID: "AC-021", Product: "AC-Desk", Quantity: 7 },
    { ID: "AC-022", Product: "AC-Printer", Quantity: 3 },
    { ID: "AC-023", Product: "AC-Scanner", Quantity: 5 },
    { ID: "AC-024", Product: "AC-Monitor Stand", Quantity: 8 },
    { ID: "AC-025", Product: "AC-Desk Mat", Quantity: 2 },
    { ID: "AC-026", Product: "AC-Stapler", Quantity: 6 },
    { ID: "AC-027", Product: "AC-Paper Clips", Quantity: 4 },
    { ID: "AC-028", Product: "AC-Notebook Stand", Quantity: 9 },
    { ID: "AC-029", Product: "AC-Whiteboard", Quantity: 1 },
    { ID: "AC-030", Product: "AC-File Folders", Quantity: 10 }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Product List</Text>
      <ScrollView>
        {products.map((product) => (
          <View key={product.ID} style={styles.productItem}>
            <Text style={styles.productId}>Product ID: {product.ID}</Text>
            <Text style={styles.productName}>Product Name: {product.Product}</Text>
            <Text style={styles.quantity}>Quantity: {product.Quantity}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  productItem: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
  },
  productId: {
    color: 'red', 
  },
  productName: {
    color: 'green', 
  },
  quantity: {
    color: 'blue', 
  },
});

export default ViewProductsScreen;
