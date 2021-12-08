import React from "react";
import { Card } from "react-native-paper";
import Text from "~/components/Text";
import { Product } from "~/hooks/useProducts";

type Props = {
  product: Product;
} & Partial<React.ComponentProps<typeof Card>>;

export const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <Card>
      <Card.Cover source={{ uri: product.image }} />
      <Card.Content>
        <Text variant="h1">{product.title}</Text>
      </Card.Content>
    </Card>
  );
};

export default ProductCard;
