import { useTheme } from "@shopify/restyle";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { AppLayout } from "~/components/AppLayout";
import ProductCard from "~/components/ProductCard";
import { useProducts } from "~/hooks/useProducts";
import { Theme } from "~/theme";

export const ProductListScreen: React.FC = () => {
  const { data, isLoading, isError } = useProducts();
  const { colors } = useTheme<Theme>();

  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator
          animating={true}
          color={colors.accent}
          size="large"
        />
      </SafeAreaView>
    );
  }

  return (
    <AppLayout title="Products">
      <StatusBar style="dark" />
      <FlatList
        data={data}
        renderItem={({ item: product }) => <ProductCard product={product} />}
        keyExtractor={(product) => product.name as string}
      />
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ProductListScreen;
