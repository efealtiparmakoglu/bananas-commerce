import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types/product';
import { api } from '@/lib/api';

export const FeaturedProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('/products/featured');
        setProducts(response.data);
      } catch (error) {
        console.error('Ürünler yüklenirken hata:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="animate-pulse bg-gray-200 rounded-lg h-80" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          🔥 Çok Satanlar
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/products"
            className="inline-block px-6 py-3 border-2 border-yellow-500 text-yellow-600 font-semibold rounded-full hover:bg-yellow-500 hover:text-white transition"
          >
            Tüm Ürünleri Gör
          </Link>
        </div>
      </div>
    </section>
  );
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/products/${product.slug}`}>
        <div className="relative aspect-square bg-gray-100">
          <Image
            src={product.images[0] || '/placeholder.png'}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.discount > 0 && (
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              %{product.discount} İndirim
            </span>
          )}
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">
            {product.name}
          </h3>
          <p className="text-sm text-gray-500 mb-2">{product.category.name}</p>
          
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-yellow-600">
              ₺{product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                ₺{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </Link>

      <div className="px-4 pb-4">
        <AddToCartButton product={product} />
      </div>
    </div>
  );
};

const AddToCartButton: React.FC<{ product: Product }> = ({ product }) => {
  const [loading, setLoading] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = async () => {
    setLoading(true);
    await addToCart(product, 1);
    setLoading(false);
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={loading || product.stock === 0}
      className={`w-full py-2 rounded-lg font-semibold transition ${
        product.stock === 0
          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
          : 'bg-yellow-500 text-white hover:bg-yellow-600'
      }`}
    >
      {loading ? 'Ekleniyor...' : product.stock === 0 ? 'Stok Yok' : 'Sepete Ekle'}
    </button>
  );
};
