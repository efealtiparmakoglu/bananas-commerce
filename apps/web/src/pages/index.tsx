import React from 'react';
import Head from 'next/head';
import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/home/Hero';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { Categories } from '@/components/home/Categories';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Bananas Commerce - Premium E-Commerce</title>
        <meta name="description" content="En iyi ürünler, en iyi fiyatlar" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main>
          <Hero 
            title="Yaz İndirimleri Başladı!"
            subtitle="Seçili ürünlerde %50'ye varan indirimler"
            ctaText="Alışverişe Başla"
            ctaLink="/products"
          />
          
          <FeaturedProducts />
          
          <Categories />
        </main>
        
        <Footer />
      </div>
    </>
  );
}
