
import React, { useState, useCallback } from 'react';
import { Product, AppState, TryOnResult } from './types';
import { CATALOG } from './constants';
import { geminiService } from './services/geminiService';

// Sub-components
import Header from './components/Header';
import ImageUploader from './components/ImageUploader';
import ProductCatalog from './components/ProductCatalog';
import FittingRoom from './components/FittingRoom';
import ResultDisplay from './components/ResultDisplay';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>('upload');
  const [userImage, setUserImage] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [lastResult, setLastResult] = useState<TryOnResult | null>(null);

  const handleImageUpload = (base64: string) => {
    setUserImage(base64);
    setAppState('catalog');
  };

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setSelectedColor(product.colors[0].name);
    setSelectedSize(product.sizes[0]);
    setAppState('fitting');
  };

  const handleTryOn = async () => {
    if (!userImage || !selectedProduct) return;

    setIsProcessing(true);
    try {
      const description = `${selectedProduct.name} in ${selectedColor} color, size ${selectedSize}. ${selectedProduct.description}`;
      const resultImageUrl = await geminiService.performVirtualTryOn(userImage, description);
      
      const result: TryOnResult = {
        id: Math.random().toString(36).substr(2, 9),
        imageUrl: resultImageUrl,
        timestamp: Date.now(),
        productId: selectedProduct.id,
        color: selectedColor,
      };
      
      setLastResult(result);
      setAppState('result');
    } catch (error) {
      console.error("Try-on error:", error);
      alert("A moment of technical difficulty. Please try again or select a different garment.");
    } finally {
      setIsProcessing(false);
    }
  };

  const resetFlow = () => {
    setAppState('upload');
    setUserImage(null);
    setSelectedProduct(null);
    setLastResult(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onLogoClick={resetFlow} />
      
      <main className="flex-1 flex flex-col max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        {appState === 'upload' && (
          <div className="flex-1 flex flex-col justify-center items-center">
            <div className="max-w-2xl text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-serif mb-6 text-gray-900">Discover your perfect fit.</h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Upload a photo to see our latest collection on your unique silhouette. 
                Our AI-driven technology ensures realistic draping, textures, and style.
              </p>
            </div>
            <ImageUploader onUpload={handleImageUpload} />
          </div>
        )}

        {appState === 'catalog' && (
          <ProductCatalog 
            products={CATALOG} 
            onSelect={handleProductSelect} 
            onBack={() => setAppState('upload')}
          />
        )}

        {appState === 'fitting' && selectedProduct && (
          <FittingRoom 
            product={selectedProduct}
            userImage={userImage!}
            selectedColor={selectedColor}
            selectedSize={selectedSize}
            onColorChange={setSelectedColor}
            onSizeChange={setSelectedSize}
            onTryOn={handleTryOn}
            onBack={() => setAppState('catalog')}
            isProcessing={isProcessing}
          />
        )}

        {appState === 'result' && lastResult && selectedProduct && (
          <ResultDisplay 
            result={lastResult}
            product={selectedProduct}
            onBack={() => setAppState('fitting')}
            onRestart={resetFlow}
          />
        )}
      </main>

      <footer className="py-8 border-t border-gray-100 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Elegance VTO. Powered by Advanced Generative AI.
      </footer>
    </div>
  );
};

export default App;
