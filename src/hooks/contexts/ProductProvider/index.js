import { createContext, useContext, useState, useCallback } from 'react';
import { api } from '../../../services/api/';

const ProductContext = createContext({});

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  const getProducts = useCallback(
    async () => {
      try {
        const { data } = await api.get("/products");
        setProducts(data);
      } catch (err) {
        setError("Error ao adquirir a lista de produtos");
      }
    }, [])

  const postProducts = useCallback(
    async ({ name, description, price }) => {
      try {
        await api.post("/products", {
          name,
          description,
          price
        })
      } catch (err) {
        setError("Error ao postar um produto");
      }
    }, [])

  const putProduct = useCallback(
    async ({ id, name, description, price }) => {
      try {
        await api.put(`/products/${id}`, {
          name,
          description,
          price
        })
      } catch (err) {
        setError("Error ao editar o produto");
      }
    }, [])

  const deleteProduct = useCallback(
    async ({ id }) => {
      try {
        await api.delete(`/products/${id}`)
      } catch (err) {
        setError("Error ao deletar o produto");
      }
    }, [])

  return (
    <ProductContext.Provider
      value={{
        products,
        error,
        getProducts,
        postProducts,
        putProduct,
        deleteProduct
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

function useProduct() {
  return useContext(ProductContext);
}

export { ProductProvider, useProduct };